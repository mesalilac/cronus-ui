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

        return <Input onInput={setValue} value={value()} />;
    },
};

export const Search: Story = {
    args: {
        type: 'search',
    },
    render: (args) => {
        const [value, setValue] = createSignal('');

        return <Input {...args} onInput={setValue} value={value()} />;
    },
};

export const WithBadge: Story = {
    args: {
        type: 'search',
        badge: <Badge>1</Badge>,
    },
    render: (args) => {
        const [value, setValue] = createSignal('apple');

        return <Input {...args} onInput={setValue} value={value()} />;
    },
};

export const WithCustomIcon: Story = {
    render: () => {
        const [value, setValue] = createSignal('');

        return <Input  icon={<IconNavigationCompass />} onInput={setValue} value={value()} />;
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

export const WithMinLength: Story = {
    args: {
        minLength: 8,
    },
    render: (args) => {
        const [value, setValue] = createSignal('');

        return <Input {...args} onInput={setValue} value={value()} />;
    },
};

export const WithMaxLength: Story = {
    args: {
        maxLength: 8,
    },
    render: (args) => {
        const [value, setValue] = createSignal('');

        return <Input {...args} onInput={setValue} value={value()} />;
    },
};

export const WithLabel: Story = {
    args: {
        label: 'Label',
    },
    render: (args) => {
        const [value, setValue] = createSignal('');

        return <Input {...args} onInput={setValue} value={value()} />;
    },
};

export const WithLabelAndRequired: Story = {
    args: {
        label: 'Label',
        required: true,
    },
    render: (args) => {
        const [value, setValue] = createSignal('');

        return <Input {...args} onInput={setValue} value={value()} />;
    },
};

export const WithHelperText: Story = {
    args: {
        helper: 'Helper Text',
    },
    render: (args) => {
        const [value, setValue] = createSignal('');

        return <Input {...args} onInput={setValue} value={value()} />;
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
