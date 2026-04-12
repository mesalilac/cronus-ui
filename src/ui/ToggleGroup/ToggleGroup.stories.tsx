import { createSignal } from 'solid-js';
import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { ToggleGroup } from './ToggleGroup';

const meta = {
    title: 'Ui/ToggleGroup',
    component: ToggleGroup,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof ToggleGroup>;

export default meta;
type Story = StoryObj<typeof ToggleGroup>;

export const Simple: Story = {
    render: () => {
        const [value, setValue] = createSignal('');

        return (
            <ToggleGroup onChange={setValue} type='single' value={value()}>
                <ToggleGroup.Item value='a'>A</ToggleGroup.Item>
                <ToggleGroup.Item value='b'>B</ToggleGroup.Item>
                <ToggleGroup.Item value='c'>C</ToggleGroup.Item>
            </ToggleGroup>
        );
    },
};

export const Multiple: Story = {
    render: () => {
        const [value, setValue] = createSignal<string[]>([]);

        return (
            <ToggleGroup onChange={setValue} type='multiple' value={value()}>
                <ToggleGroup.Item value='a'>A</ToggleGroup.Item>
                <ToggleGroup.Item value='b'>B</ToggleGroup.Item>
                <ToggleGroup.Item value='c'>C</ToggleGroup.Item>
            </ToggleGroup>
        );
    },
};

export const DisabledItem: Story = {
    render: () => {
        const [value, setValue] = createSignal<string[]>([]);

        return (
            <ToggleGroup onChange={setValue} type='multiple' value={value()}>
                <ToggleGroup.Item value='a'>A</ToggleGroup.Item>
                <ToggleGroup.Item disabled value='b'>
                    B
                </ToggleGroup.Item>
                <ToggleGroup.Item value='c'>C</ToggleGroup.Item>
            </ToggleGroup>
        );
    },
};

export const Disabled: Story = {
    render: () => {
        const [value, setValue] = createSignal<string[]>([]);

        return (
            <ToggleGroup
                disabled
                onChange={setValue}
                type='multiple'
                value={value()}
            >
                <ToggleGroup.Item value='a'>A</ToggleGroup.Item>
                <ToggleGroup.Item value='b'>B</ToggleGroup.Item>
                <ToggleGroup.Item value='c'>C</ToggleGroup.Item>
            </ToggleGroup>
        );
    },
};
