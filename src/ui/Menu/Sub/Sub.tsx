import { createSignal, type JSXElement, mergeProps } from 'solid-js';

import type { PartialComponentProps } from '~/types';
import type { CommonPositionArea } from '~/ui/Popover';

import { Content } from './Content';
import { SubMenuContext } from './context';
import { Trigger } from './Trigger';

export type DropdownMenuSubProps = {
    placement?: CommonPositionArea;
    placementFallback?: CommonPositionArea[];
    children: JSXElement;
};

export const Sub = (rawProps: DropdownMenuSubProps) => {
    const props = mergeProps(
        {
            placement: 'right-start',
            placementFallback: [
                'left-start',
                'right-start',
                'top-start',
                'bottom-start',
            ] as CommonPositionArea[],
        } satisfies PartialComponentProps<typeof Sub>,
        rawProps,
    );

    const [isOpen, setIsOpen] = createSignal(false);
    const [triggerRef, setTriggerRef] = createSignal<HTMLButtonElement>();

    return (
        <SubMenuContext.Provider
            value={{
                isOpen,
                setIsOpen,
                closeMenu: () => setIsOpen(false),
                placement: () => props.placement,
                placementFallback: () => props.placementFallback,
                triggerRef,
                setTriggerRef,
            }}
        >
            {props.children}
        </SubMenuContext.Provider>
    );
};

Sub.Trigger = Trigger;
Sub.Content = Content;
