import { createSignal } from 'solid-js';
import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconNavigationCompass } from '~/icons';
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

        return (
            <div class='w-96'>
                <Input onInput={setValue} value={value()} />
            </div>
        );
    },
};

export const Search: Story = {
    args: {
        type: 'search',
    },
    render: (args) => {
        const [value, setValue] = createSignal('');

        return (
            <div class='w-96'>
                <Input {...args} onInput={setValue} value={value()} />
            </div>
        );
    },
};

export const Email: Story = {
    args: {
        type: 'email',
    },
    render: (args) => {
        const [value, setValue] = createSignal('example@domain.com');

        return (
            <div class='w-96'>
                <Input {...args} onInput={setValue} value={value()} />
            </div>
        );
    },
};

export const Password: Story = {
    args: {
        type: 'password',
    },
    render: (args) => {
        const [value, setValue] = createSignal('password');

        return (
            <div class='w-96'>
                <Input {...args} onInput={setValue} value={value()} />
            </div>
        );
    },
};

export const Url: Story = {
    args: {
        type: 'url',
    },
    render: (args) => {
        const [value, setValue] = createSignal('https://example.com');

        return (
            <div class='w-96'>
                <Input {...args} onInput={setValue} value={value()} />
            </div>
        );
    },
};

export const WithBadge: Story = {
    args: {
        type: 'search',
        badge: <Badge>1</Badge>,
    },
    render: (args) => {
        const [value, setValue] = createSignal('apple');

        return (
            <div class='w-96'>
                <Input {...args} onInput={setValue} value={value()} />
            </div>
        );
    },
};

export const WithAutoFocus: Story = {
    render: () => {
        const [value, setValue] = createSignal('');

        return (
            <div class='w-96'>
                <Input onInput={setValue} value={value()} />
            </div>
        );
    },
};

export const WithCustomIcon: Story = {
    render: () => {
        const [value, setValue] = createSignal('');

        return (
            <div class='w-96'>
                <Input
                    icon={<IconNavigationCompass />}
                    onInput={setValue}
                    value={value()}
                />
            </div>
        );
    },
};

export const WithSiblingButton: Story = {
    render: () => {
        const [value, setValue] = createSignal('');

        return (
            <div class='w-96'>
                <Input onInput={setValue} value={value()}>
                    <Button>Button</Button>
                </Input>
            </div>
        );
    },
};

export const WithMinLength: Story = {
    args: {
        minLength: 8,
    },
    render: (args) => {
        const [value, setValue] = createSignal('');

        return (
            <div class='w-96'>
                <Input {...args} onInput={setValue} value={value()} />
            </div>
        );
    },
};

export const WithMaxLength: Story = {
    args: {
        maxLength: 8,
    },
    render: (args) => {
        const [value, setValue] = createSignal('');

        return (
            <div class='w-96'>
                <Input {...args} onInput={setValue} value={value()} />
            </div>
        );
    },
};

export const WithLabel: Story = {
    args: {
        label: 'Label',
    },
    render: (args) => {
        const [value, setValue] = createSignal('');

        return (
            <div class='w-96'>
                <Input {...args} onInput={setValue} value={value()} />
            </div>
        );
    },
};

export const WithLabelAndRequired: Story = {
    args: {
        label: 'Label',
        required: true,
    },
    render: (args) => {
        const [value, setValue] = createSignal('');

        return (
            <div class='w-96'>
                <Input {...args} onInput={setValue} value={value()} />
            </div>
        );
    },
};

export const WithHelperText: Story = {
    args: {
        helper: 'Helper Text',
    },
    render: (args) => {
        const [value, setValue] = createSignal('');

        return (
            <div class='w-96'>
                <Input {...args} onInput={setValue} value={value()} />
            </div>
        );
    },
};

export const WithError: Story = {
    render: () => {
        const [value, setValue] = createSignal('');

        return (
            <div class='w-96'>
                <Input
                    onInput={setValue}
                    validate={(v) => {
                        if (v.length < 10)
                            return 'Must be at least 10 characters long';
                    }}
                    value={value()}
                />
            </div>
        );
    },
};
