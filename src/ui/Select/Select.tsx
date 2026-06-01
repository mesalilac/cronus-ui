import { gsap } from 'gsap';
import {
    type Accessor,
    createContext,
    createEffect,
    createMemo,
    createSignal,
    type FlowComponent,
    type JSXElement,
    mergeProps,
    onCleanup,
    onMount,
    type ParentComponent,
    type Setter,
    Show,
    useContext,
    type VoidComponent,
} from 'solid-js';

import {
    IconArrowCaretDownMd,
    IconArrowCaretUpMd,
    IconEditAddPlus,
    IconInterfaceCheck,
} from '~/icons';
import { Button, type ButtonProps } from '~/ui/Button';
import { useFieldContext } from '~/ui/Field';
import { Input } from '~/ui/Input';
import { Label } from '~/ui/Label';
import {
    COMMON_POSITION_AREA,
    type CommonPositionArea,
    Popover,
} from '~/ui/Popover';
import { Separator } from '~/ui/Separator';
import { cn } from '~/utils';

export type SelectContext = {
    onChange: (value: string) => void;
    autoClose: Accessor<boolean | undefined>;
    value: Accessor<string | undefined>;
    placement: Accessor<CommonPositionArea>;
    placementFallback: Accessor<CommonPositionArea[]>;

    isOpen: Accessor<boolean>;
    setIsOpen: Setter<boolean>;
    triggerRef: Accessor<HTMLButtonElement | undefined>;
    setTriggerRef: Setter<HTMLButtonElement | undefined>;
};

export const SelectContext = createContext<SelectContext>();

export const useSelectContext = () => {
    const context = useContext(SelectContext);

    if (!context) {
        throw new Error('useSelectContext must be used within a SelectContext');
    }

    return context;
};

export type SelectProps = {
    onChange: (value: string) => void;
    /**
     * @default true
     */
    autoClose?: boolean;
    value?: string;
    placement?: CommonPositionArea;
    placementFallback?: CommonPositionArea[];
    /** Enables persistence of the selected value after refresh */
    persistKey?: string;
    children: JSXElement;
};

const getItemKey = (persistKey: string | undefined): string | undefined => {
    const key = persistKey?.trim().toLocaleUpperCase();
    if (!persistKey) return;

    return `SELECT_MENU_${key}`;
};

export const Select: SelectCompound = (rawProps) => {
    const props = mergeProps(
        {
            autoClose: true,
            placement: 'bottom-start',
            placementFallback: [
                'right-start',
                'left-start',
                'top-start',
                'bottom-start',
            ] as CommonPositionArea[],
        } satisfies Partial<SelectProps>,
        rawProps,
    );

    const [isOpen, setIsOpen] = createSignal(false);

    const [triggerRef, setTriggerRef] = createSignal<
        HTMLButtonElement | undefined
    >(undefined);

    onMount(() => {
        const itemKey = getItemKey(props.persistKey);
        if (!itemKey) return;

        const value = localStorage.getItem(itemKey);
        if (!value) return;

        props.onChange(value);
    });

    const onChange = (value: string) => {
        const itemKey = getItemKey(props.persistKey);
        if (itemKey) localStorage.setItem(itemKey, value);

        props.onChange(value);
    };

    const value = createMemo(() => props.value);

    return (
        <SelectContext.Provider
            value={{
                onChange,
                autoClose: () => props.autoClose,
                value,
                isOpen,
                setIsOpen,
                placement: () => props.placement,
                placementFallback: () => props.placementFallback,
                triggerRef: triggerRef,
                setTriggerRef: setTriggerRef,
            }}
        >
            {props.children}
        </SelectContext.Provider>
    );
};

const SelectTrigger: ParentComponent<
    Pick<ButtonProps, 'appearance' | 'variant' | 'size' | 'class' | 'disabled'>
> = (props) => {
    const ctx = useSelectContext();

    const fieldCtx = useFieldContext();

    return (
        <Button
            appearance={props.appearance}
            aria-expanded={ctx.isOpen()}
            aria-haspopup='listbox'
            class={cn(
                'min-w-52 justify-between px-3 py-2.5 capitalize outline outline-border',
                'data-[open=true]:outline-accent',
                'data-[invalid=true]:outline-danger',
                'data-[warning=true]:outline-warning',
                props.class,
            )}
            data-invalid={fieldCtx?.hasError()}
            data-open={ctx.isOpen()}
            data-warning={fieldCtx?.hasWarning()}
            disabled={props.disabled}
            ref={ctx.setTriggerRef}
            role='combobox'
            size={props.size}
            variant={props.variant ?? 'soft'}
        >
            <div class='flex flex-row gap-2'>
                {props.children ?? (ctx.value() || 'Choose an option')}
            </div>
            <div class='flex flex-col'>
                <IconArrowCaretUpMd class='-mb-2' />
                <IconArrowCaretDownMd />
            </div>
        </Button>
    );
};

const SelectGroup: FlowComponent<{
    class?: string;
}> = (props) => {
    return (
        <div class={cn('flex flex-col gap-2 rounded-default', props.class)}>
            {props.children}
        </div>
    );
};

const SelectSearchbar: VoidComponent<{
    query: string;
    setQuery: (query: string) => void;
    onCreateNewOption?: (value: string) => void;
    canCreateFromQuery?: (value: string) => boolean;
    class?: string;
}> = (props) => {
    const canCreateFromQuery = props.canCreateFromQuery ?? (() => true);

    const onCreate = () => {
        const query = props.query.trim();

        if (!query) return;

        props.setQuery('');
        props.onCreateNewOption?.(query);
    };

    return (
        <div class='flex flex-1 items-center gap-1'>
            <Input
                autoFocus
                class={cn('px-2 py-1', props.class)}
                onInput={props.setQuery}
                type='search'
                value={props.query}
            />
            <Show
                when={
                    props.query.trim() && props.onCreateNewOption !== undefined
                }
            >
                <Button
                    appearance='primary'
                    class='px-2 py-1.5'
                    disabled={!canCreateFromQuery(props.query)}
                    onClick={onCreate}
                    title='Create new option'
                >
                    <IconEditAddPlus />
                </Button>
            </Show>
        </div>
    );
};

const SelectOption: FlowComponent<{
    value: string;
    disabled?: boolean;
    selected?: boolean;
    class?: string;
}> = (props) => {
    const ctx = useSelectContext();

    const isSelected = () => props.selected ?? ctx.value() === props.value;

    return (
        <Button
            appearance={isSelected() ? 'primary' : 'secondary'}
            class={cn(
                'relative justify-between text-nowrap px-2 py-1 text-text-primary before:absolute before:inset-x-0 before:inset-y-1 before:size-full before:content-[""]',
                props.class,
            )}
            disabled={props.disabled}
            onClick={() => {
                ctx.onChange(props.value);

                if (ctx.autoClose()) ctx.setIsOpen(false);
            }}
            variant={isSelected() ? 'solid' : 'ghost'}
        >
            <div class='flex gap-1'>{props.children}</div>
            <Show when={isSelected()}>
                <IconInterfaceCheck />
            </Show>
        </Button>
    );
};

const SelectFilter: FlowComponent<{ class?: string }> = (props) => {
    return (
        <>
            <div class={cn('flex flex-col gap-2 bg-surface-2', props.class)}>
                {props.children}
            </div>
            <Separator class='-mx-2 my-0.5' />
        </>
    );
};

const SelectContent: FlowComponent<{ class?: string }> = (props) => {
    const ctx = useSelectContext();

    let divRef!: HTMLDivElement;

    createEffect(() => {
        if (ctx.isOpen() && divRef) {
            const gsapCtx = gsap.context(() => {
                gsap.from(divRef, {
                    autoAlpha: 0,
                    scale: 0.98,
                    overflow: 'hidden',
                    duration: 0.2,
                    ease: 'power3.out',
                });
            });

            onCleanup(() => gsapCtx.revert());
        }
    });

    const triggerWidth = (): string => {
        const ref = ctx.triggerRef();

        if (ref) return `${ref.getBoundingClientRect().width}px`;

        return 'auto';
    };

    const getMargin = () => {
        if (
            ctx.placement().startsWith('top') ||
            ctx.placement().startsWith('bottom')
        ) {
            return cn('my-1');
        } else if (
            ctx.placement().startsWith('right') ||
            ctx.placement().startsWith('left')
        ) {
            return cn('mx-1');
        }
    };

    return (
        <Popover
            onOpenChange={ctx.setIsOpen}
            open={ctx.isOpen()}
            positionTryFallbacks={() =>
                ctx.placementFallback().map((f) => COMMON_POSITION_AREA[f])
            }
            targetPosition='fixed'
            targetPositionArea={COMMON_POSITION_AREA[ctx.placement()]}
            triggerElement={ctx.triggerRef()}
        >
            <div
                class={cn(
                    'flex max-h-80 flex-col gap-2 rounded-default bg-surface-2 p-2 text-text-primary shadow-default outline outline-accent',
                    getMargin(),
                    props.class,
                )}
                ref={divRef}
                style={{
                    'min-width': triggerWidth(),
                    'max-width': triggerWidth(),
                }}
            >
                {props.children}
            </div>
        </Popover>
    );
};

const SelectList: FlowComponent<{ class?: string }> = (props) => {
    return (
        <div
            class={cn(
                'flex flex-1 flex-col gap-1 overflow-y-auto',
                props.class,
            )}
        >
            {props.children}
            <span class='hidden select-none text-center text-text-secondary only:block'>
                No options found
            </span>
        </div>
    );
};

const SelectLabel: ParentComponent<{ class?: string }> = (props) => {
    return (
        <Label class={cn('px-1.5 py-1 text-text-muted text-xs', props.class)}>
            {props.children}
        </Label>
    );
};

const SelectSeparator: VoidComponent<{ class?: string }> = (props) => {
    return <Separator class={cn('my-2 border-border-subtle', props.class)} />;
};

type SelectCompound = {
    (props: SelectProps): JSXElement;

    Trigger: typeof SelectTrigger;
    Content: typeof SelectContent;
    List: typeof SelectList;
    Label: typeof SelectLabel;
    Separator: typeof SelectSeparator;
    Group: typeof SelectGroup;
    Option: typeof SelectOption;
    Filter: typeof SelectFilter;
    Searchbar: typeof SelectSearchbar;
};

Select.Trigger = SelectTrigger;
Select.Content = SelectContent;
Select.List = SelectList;
Select.Separator = SelectSeparator;
Select.Label = SelectLabel;
Select.Group = SelectGroup;
Select.Option = SelectOption;
Select.Filter = SelectFilter;
Select.Searchbar = SelectSearchbar;
