import { createSignal } from 'solid-js';
import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { Label } from '~/ui/Label';
import { Text } from '~/ui/Text';

import { Checkbox } from './Checkbox';

const meta = {
    title: 'Ui/Checkbox',
    component: Checkbox,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
    render: () => {
        const [checked, setChecked] = createSignal(false);

        return (
            <Checkbox checked={checked()} onChange={setChecked}>
                <Checkbox.Control />
            </Checkbox>
        );
    },
};

export const WithLabel: Story = {
    render: () => {
        const [checked, setChecked] = createSignal(false);

        return (
            <Checkbox checked={checked()} onChange={setChecked}>
                <Checkbox.Control />
                <Label>Accept terms and conditions</Label>
            </Checkbox>
        );
    },
};

export const AsCard: Story = {
    render: () => {
        const [checked, setChecked] = createSignal(false);

        return (
            <Checkbox
                checked={checked()}
                class='w-96 rounded-default p-3 outline outline-border data-[checked=true]:bg-surface-1'
                onChange={setChecked}
            >
                <Checkbox.Control class='mt-0.5 self-start' />
                <div class='flex flex-col gap-1'>
                    <Label>Enable notifications</Label>
                    <Text variant='muted'>
                        You can enable or disable notifications at any time.
                    </Text>
                </div>
            </Checkbox>
        );
    },
};

export const Disabled: Story = {
    render: () => {
        const [checked, setChecked] = createSignal(false);

        return (
            <Checkbox checked={checked()} disabled onChange={setChecked}>
                <Checkbox.Control />
                <Label>Label</Label>
            </Checkbox>
        );
    },
};
