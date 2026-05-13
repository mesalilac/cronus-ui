import type { FlowComponent } from 'solid-js';
import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { cn } from '~/utils';

import { CopyField } from './CopyField';

type StoryComponent = typeof CopyField;

const meta = {
    title: 'Ui/CopyField',
    component: CopyField,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<StoryComponent>;

export default meta;

type Story = StoryObj<StoryComponent>;

const Wrapper: FlowComponent<{ class?: string }> = (props) => {
    return (
        <div
            class={cn(
                'size-124 rounded-default bg-surface-1 p-2 outline outline-border',
                props.class,
            )}
        >
            {props.children}
        </div>
    );
};

export const Default: Story = {
    render: () => {
        const value = 'hi';

        return <CopyField value={value} />;
    },
};

export const Multiline: Story = {
    render: () => {
        const value = 'hi';

        return (
            <Wrapper>
                <CopyField class='h-full' multiline value={value} />
            </Wrapper>
        );
    },
};
