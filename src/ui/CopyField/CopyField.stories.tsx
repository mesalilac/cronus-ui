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
        const value =
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

        return (
            <CopyField value={value}>
                <CopyField.Input />
                <CopyField.CopyButton />
            </CopyField>
        );
    },
};

export const Multiline: Story = {
    render: () => {
        const value =
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed\nsagittis, ipsum in tristique accumsan, erat sem bibendum justo, vel\ndictum arcu mi sit amet ex. Ut quis auctor massa, et porta felis\nDuis ut sapien lectus. Sed elementum\ncongue molestie. Donec aliquam\neros vel consectetur efficitur. Etiam commodo blandit neque, a\nfringilla magna tincidunt quis. Nulla sit amet odio sagittis,\nblandit nunc vel, scelerisque nulla. Nulla facilisis finibus\npretium. Nulla in nunc justo. Duis interdum pulvinar sem eu\nfermentum. Donec dictum a massa eu iaculis. Sed sagittis velit a\nnunc ultrices, eget tempus est tincidunt. Aenean interdum tellus ut\nfeugiat porttitor. Phasellus interdum consectetur elit eu dapibus.';

        return (
            <Wrapper>
                <CopyField multiline value={value}>
                    <CopyField.Input />
                    <CopyField.CopyButton />
                </CopyField>
            </Wrapper>
        );
    },
};

export const Editable: Story = {
    render: () => {
        const value =
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

        return (
            <CopyField readOnly={false} value={value}>
                <CopyField.Input />
                <CopyField.CopyButton />
            </CopyField>
        );
    },
};
