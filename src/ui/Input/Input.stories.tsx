import { createSignal } from 'solid-js';
import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { Badge } from '~/ui/Badge';
import { Button } from '~/ui/Button';

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

        return <Input onInput={setValue} value={value()} />;
    },
};

export const Search: Story = {
    render: () => {
        const [value, setValue] = createSignal('');

        return <Input onInput={setValue} type='search' value={value()} />;
    },
};

export const WithBadge: Story = {
    render: () => {
        const [value, setValue] = createSignal('apple');

        return (
            <Input
                badge={<Badge>1</Badge>}
                onInput={setValue}
                type='search'
                value={value()}
            />
        );
    },
};

export const WithSiblingButton: Story = {
    render: () => {
        const [value, setValue] = createSignal('');

        return (
            <Input onInput={setValue} value={value()}>
                <Button>Button</Button>
            </Input>
        );
    },
};

export const WithLabel: Story = {
    render: () => {
        const [value, setValue] = createSignal('');

        return <Input label='Label' onInput={setValue} value={value()} />;
    },
};

export const WithLabelAndRequired: Story = {
    render: () => {
        const [value, setValue] = createSignal('');

        return (
            <Input label='Label' onInput={setValue} required value={value()} />
        );
    },
};

export const WithHelperText: Story = {
    render: () => {
        const [value, setValue] = createSignal('');

        return (
            <Input helper='Helper Text' onInput={setValue} value={value()} />
        );
    },
};

export const WithError: Story = {
    render: () => {
        const [value, setValue] = createSignal('');

        return (
            <Input
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
