import { createSignal } from 'solid-js';
import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { Label } from '~/ui/Label';
import { Text } from '~/ui/Text';

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

        return (
            <ToggleSwitch checked={checked()} onChange={setChecked}>
                <ToggleSwitch.Control />
            </ToggleSwitch>
        );
    },
};

export const WithLabel: Story = {
    render: () => {
        const [checked, setChecked] = createSignal(false);

        return (
            <ToggleSwitch checked={checked()} onChange={setChecked}>
                <ToggleSwitch.Control />
                <Label>Label</Label>
            </ToggleSwitch>
        );
    },
};

export const AsCard: Story = {
    render: () => {
        const [checked, setChecked] = createSignal(false);

        return (
            <ToggleSwitch
                checked={checked()}
                class='w-96 rounded-default p-3 outline outline-border data-[checked=true]:bg-surface-1'
                onChange={setChecked}
            >
                <div class='flex flex-col gap-2'>
                    <Label>Share across devices</Label>
                    <Text variant='muted'>
                        Focus is shared across devices, and turns off when you
                        leave the app.
                    </Text>
                </div>
                <ToggleSwitch.Control />
            </ToggleSwitch>
        );
    },
};

export const Disabled: Story = {
    render: () => {
        const [checked, setChecked] = createSignal(false);

        return (
            <ToggleSwitch checked={checked()} disabled onChange={setChecked}>
                <ToggleSwitch.Control />
            </ToggleSwitch>
        );
    },
};
