import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconSystemLaptop } from './IconSystemLaptop';

const meta = {
    title: 'Icon/System/Laptop',
    component: IconSystemLaptop,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconSystemLaptop>;

export default meta;
type Story = StoryObj<typeof IconSystemLaptop>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
