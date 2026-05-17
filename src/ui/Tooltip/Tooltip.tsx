import type { JSXElement, ParentComponent } from 'solid-js';

export type TooltipProps = {
    children: JSXElement;
};

export const Tooltip: TooltipCompound = (props) => {
    return <div>{props.children}</div>;
};

export const Trigger: ParentComponent<{ class?: string }> = (props) => {
    return <div>Tooltip</div>;
};

export const Content: ParentComponent<{ class?: string }> = (props) => {
    return <div>{props.children}</div>;
};

type TooltipCompound = {
    (props: TooltipProps): JSXElement;
    Trigger: typeof Trigger;
    Content: typeof Content;
};

Tooltip.Trigger = Trigger;
Tooltip.Content = Content;
