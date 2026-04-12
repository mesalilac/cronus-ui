import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceCheckboxFill } from './IconInterfaceCheckboxFill';

const meta = {
    title: 'Icon/Interface/CheckboxFill',
    component: IconInterfaceCheckboxFill,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconInterfaceCheckboxFill>;

export default meta;
type Story = StoryObj<typeof IconInterfaceCheckboxFill>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
