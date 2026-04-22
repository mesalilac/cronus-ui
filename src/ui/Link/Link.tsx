import {
    type ComponentProps,
    createMemo,
    type JSX,
    type ParentComponent,
    Show,
    splitProps,
} from 'solid-js';

import { IconInterfaceExternalLink } from '~/icons';
import { cn } from '~/utils';

export interface LinkProps extends ComponentProps<'a'> {
    class?: string;
    href: string;
    disabled?: boolean;
    hideIcon?: boolean;
    children: JSX.Element;
}

export const Link: ParentComponent<LinkProps> = (rawProps) => {
    const [local, others] = splitProps(rawProps, [
        'class',
        'href',
        'disabled',
        'aria-disabled',
        'hideIcon',
        'children',
    ]);

    const isExternal = createMemo(() => {
        try {
            const link = new URL(local.href);

            return link.hostname !== window.location.hostname;
        } catch {
            return false;
        }
    });

    return (
        <a
            aria-disabled={local.disabled}
            class={cn(
                'flex items-center gap-1 font-semibold underline underline-offset-2 transition-colors hover:text-accent data-disabled:pointer-events-none data-disabled:text-text-muted',
                local.class,
            )}
            data-disabled={local.disabled}
            href={local.href}
            {...others}
        >
            {local.children}
            <Show when={isExternal() && !local.hideIcon}>
                <IconInterfaceExternalLink data-slot='external-link-icon' />
            </Show>
        </a>
    );
};
