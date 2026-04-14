import { createSignal } from 'solid-js';
import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { Textarea } from './Textarea';

const meta = {
    title: 'Ui/Textarea',
    component: Textarea,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
    render: () => {
        const [value, setValue] = createSignal('');

        return <Textarea onInput={setValue} value={value()} />;
    },
};

export const WithLabel: Story = {
    render: () => {
        const [value, setValue] = createSignal('');

        return <Textarea label='Label' onInput={setValue} value={value()} />;
    },
};

export const WithLabelAndRequired: Story = {
    render: () => {
        const [value, setValue] = createSignal('');

        return (
            <Textarea
                label='Label'
                onInput={setValue}
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
            <Textarea helper='Helper Text' onInput={setValue} value={value()} />
        );
    },
};

export const WithError: Story = {
    render: () => {
        const [value, setValue] = createSignal('');

        return (
            <Textarea
                onInput={setValue}
                validate={(v) => {
                    if (v.length < 10)
                        return 'Must be at least 10 characters long';
                }}
                value={value()}
            />
        );
    },
};
