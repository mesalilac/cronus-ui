import { createSignal, For } from 'solid-js';
import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { Badge } from '~/ui/Badge';
import { capitalize } from '~/utils';

import { Select } from './Select';

const meta = {
    title: 'Ui/Select',
    component: Select,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof Select>;

const OptionsList = ['option-1', 'option-2', 'option-3'] as const;

export const Single: Story = {
    render: () => {
        const [value, setValue] = createSignal('option-1');

        return (
            <Select onChange={setValue} value={value()}>
                <Select.Trigger>
                    {capitalize(value().replace('-', ' '))}
                </Select.Trigger>
                <Select.Content>
                    <For each={OptionsList}>
                        {(option) => (
                            <Select.Option value={option}>
                                {capitalize(option.replace('-', ' '))}
                            </Select.Option>
                        )}
                    </For>
                </Select.Content>
            </Select>
        );
    },
};

export const Multiple: Story = {
    render: () => {
        const [value, setValue] = createSignal<string[]>([
            'option-1',
            'option-2',
        ]);

        return (
            <Select
                autoClose={false}
                onChange={(v) => {
                    if (value().includes(v)) {
                        setValue((prev) => prev.filter((i) => i !== v));
                        return;
                    }

                    setValue((prev) => [...prev, v]);
                }}
            >
                <Select.Trigger>
                    Select Option <Badge>{value().length}</Badge>
                </Select.Trigger>
                <Select.Content>
                    <For each={OptionsList}>
                        {(option) => (
                            <Select.Option
                                selected={value().includes(option)}
                                value={option}
                            >
                                {capitalize(option.replace('-', ' '))}
                            </Select.Option>
                        )}
                    </For>
                </Select.Content>
            </Select>
        );
    },
};
