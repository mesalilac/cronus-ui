import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconSystemCylinder } from './IconSystemCylinder';

const meta = {
    title: 'Icon/System/Cylinder',
    component: IconSystemCylinder,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconSystemCylinder>;

export default meta;
type Story = StoryObj<typeof IconSystemCylinder>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
