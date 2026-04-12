import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconSystemMovingDesk as IconComp } from './IconSystemMovingDesk';

const meta = {
    title: 'Icon/System/MovingDesk',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const MovingDesk: Story = {
    args: {
        size: '6rem',
    },
};
