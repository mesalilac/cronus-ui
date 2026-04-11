import { createSignal } from 'solid-js';
import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { Checkbox } from './Checkbox';

type Component = typeof Checkbox;

const meta = {
    title: 'Checkbox',
    component: Checkbox,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<Component>;

export default meta;
type Story = StoryObj<Component>;

export const Default: Story = {
    render: () => {
        const [checked, setChecked] = createSignal(false);

        return <Checkbox checked={checked()} onChange={setChecked} />;
    },
};

export const WithLabel: Story = {
    render: () => {
        const [checked, setChecked] = createSignal(false);

        return (
            <Checkbox checked={checked()} label='Label' onChange={setChecked} />
        );
    },
};

export const WithHelperText: Story = {
    render: () => {
        const [checked, setChecked] = createSignal(false);

        return (
            <Checkbox
                checked={checked()}
                helper='Helper Text'
                label='Label'
                onChange={setChecked}
            />
        );
    },
};
