import { createSignal } from 'solid-js';
import type { Meta, StoryObj } from 'storybook-solidjs-vite';

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
