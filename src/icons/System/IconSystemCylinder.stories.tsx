import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconSystemCylinder as IconComp } from './IconSystemCylinder';

const meta = {
    title: 'Icon/System/Cylinder',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconCylinder: Story = {
    name: 'Cylinder'
    args: {
        size: '6rem',
    },
};
