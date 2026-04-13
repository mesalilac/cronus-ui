import { createSignal } from 'solid-js';
import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { Input } from './Input';

const meta = {
    title: 'Ui/Input',
    component: Input,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
    render: () => {
        const [value, setValue] = createSignal('');

        return (
            <Input
                onInput={(v) => setValue(v)}
                parse={(raw) => raw}
                value={value()}
            />
        );
    },
};

export const WithLabel: Story = {
    render: () => {
        const [value, setValue] = createSignal('');

        return (
            <Input
                label='Label'
                onInput={(v) => setValue(v)}
                parse={(raw) => raw}
                value={value()}
            />
        );
    },
};

export const WithLabelAndRequired: Story = {
    render: () => {
        const [value, setValue] = createSignal('');

        return (
            <Input
                label='Label'
                onInput={(v) => setValue(v)}
                parse={(raw) => raw}
                required
                value={value()}
            />
        );
    },
};

export const WithHelperText: Story = {
    render: () => {
        const [value, setValue] = createSignal('');

        return (
            <Input
                helper='Helper Text'
                onInput={(v) => setValue(v)}
                parse={(raw) => raw}
                value={value()}
            />
        );
    },
};

export const WithError: Story = {
    render: () => {
        const [value, setValue] = createSignal('');

        return (
            <Input
                onInput={(v) => setValue(v)}
                parse={(raw) => raw}
                validate={(v) => {
                    if (v.length < 10)
                        return 'Must be at least 10 characters long';
                }}
                value={value()}
            />
        );
    },
};
