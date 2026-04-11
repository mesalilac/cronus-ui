import { createSignal } from 'solid-js';
import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { ToggleSwitch } from './ToggleSwitch';

type Component = typeof ToggleSwitch;

const meta = {
    title: 'ToggleSwitch',
    component: ToggleSwitch,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<Component>;

export default meta;
type Story = StoryObj<Component>;

export const Default: Story = {
    render: () => {
        const [checked, setChecked] = createSignal(false);

        return <ToggleSwitch checked={checked()} onChange={setChecked} />;
    },
};

export const WithLabel: Story = {
    render: () => {
        const [checked, setChecked] = createSignal(false);

        return (
            <ToggleSwitch
                checked={checked()}
                label='Label'
                onChange={setChecked}
            />
        );
    },
};

export const WithHelperText: Story = {
    render: () => {
        const [checked, setChecked] = createSignal(false);

        return (
            <ToggleSwitch
                checked={checked()}
                helper='Helper Text'
                label='Label'
                onChange={setChecked}
            />
        );
    },
};

export const Disabled: Story = {
    render: () => {
        const [checked, setChecked] = createSignal(false);

        return (
            <ToggleSwitch
                checked={checked()}
                disabled
                helper='Helper Text'
                label='Label'
                onChange={setChecked}
            />
        );
    },
};
