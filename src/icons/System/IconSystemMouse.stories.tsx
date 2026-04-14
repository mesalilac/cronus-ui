import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconSystemMouse as IconComp } from './IconSystemMouse';

const meta = {
    title: 'Icon/System/Mouse',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconMouse: Story = {
    name: 'Mouse'
    args: {
        size: '6rem',
    },
};
