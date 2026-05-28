import { createSignal } from 'solid-js';
import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { Label } from '~/ui/Label';

import { ToggleSwitch } from './ToggleSwitch';

const meta = {
    title: 'Ui/ToggleSwitch',
    component: ToggleSwitch,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof ToggleSwitch>;

export default meta;
type Story = StoryObj<typeof ToggleSwitch>;

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
            <div class='flex items-center gap-2'>
                <ToggleSwitch checked={checked()} onChange={setChecked} />
                <Label>Label</Label>
            </div>
        );
    },
};

export const Disabled: Story = {
    render: () => {
        const [checked, setChecked] = createSignal(false);

        return (
            <ToggleSwitch checked={checked()} disabled onChange={setChecked} />
        );
    },
};
