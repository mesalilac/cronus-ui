import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceCheckboxCheck } from './IconInterfaceCheckboxCheck';

const meta = {
    title: 'Icon/Interface/CheckboxCheck',
    component: IconInterfaceCheckboxCheck,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconInterfaceCheckboxCheck>;

export default meta;
type Story = StoryObj<typeof IconInterfaceCheckboxCheck>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
