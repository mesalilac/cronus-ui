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

export const Disabled: Story = {
    args: {
        type: 'email',
    },
    render: (args) => {
        const [value, setValue] = createSignal('example@domain.com');

        return (
            <div class='w-96'>
                <Input disabled {...args} onInput={setValue} value={value()} />
            </div>
        );
    },
};
