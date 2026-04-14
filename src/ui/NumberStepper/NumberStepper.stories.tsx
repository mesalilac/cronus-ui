import { createSignal } from 'solid-js';
import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { NumberStepper } from './NumberStepper';

const meta = {
    title: 'Ui/NumberStepper',
    component: NumberStepper,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof NumberStepper>;

export default meta;
type Story = StoryObj<typeof NumberStepper>;

export const Default: Story = {
    render: () => {
        const [value, setValue] = createSignal(0);

        return <NumberStepper onChange={setValue} value={value()} />;
    },
};

export const WithStep: Story = {
    args: {
        step: 5,
    },
    render: (args) => {
        const [value, setValue] = createSignal(0);

        return (
            <NumberStepper
                onChange={setValue}
                step={args.step}
                value={value()}
            />
        );
    },
};

export const WithRange: Story = {
    args: {
        max: 10,
        min: 0,
    },
    render: (args) => {
        const [value, setValue] = createSignal(0);

        return (
            <NumberStepper
                max={args.max}
                min={args.min}
                onChange={setValue}
                value={value()}
            />
        );
    },
};

export const WithLabel: Story = {
    args: {
        label: 'Label',
    },
    render: (args) => {
        const [value, setValue] = createSignal(0);

        return (
            <NumberStepper
                label={args.label}
                onChange={setValue}
                value={value()}
            />
        );
    },
};

export const WithLabelAndRequired: Story = {
    args: {
        label: 'Label',
        required: true,
    },
    render: (args) => {
        const [value, setValue] = createSignal(0);

        return (
            <NumberStepper
                label={args.label}
                onChange={setValue}
                required={args.required}
                value={value()}
            />
        );
    },
};

export const WithHelperText: Story = {
    args: {
        helperText: 'Helper text',
    },
    render: (args) => {
        const [value, setValue] = createSignal(0);

        return (
            <NumberStepper
                helperText={args.helperText}
                onChange={setValue}
                value={value()}
            />
        );
    },
};

export const WithError: Story = {
    render: () => {
        const [value, setValue] = createSignal(0);

        return (
            <NumberStepper
                onChange={setValue}
                validate={(v) => {
                    if (v < 10) return 'Must be at least 10';
                }}
                value={value()}
            />
        );
    },
};
