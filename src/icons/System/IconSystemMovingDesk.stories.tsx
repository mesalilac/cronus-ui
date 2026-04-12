import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconSystemMovingDesk } from './IconSystemMovingDesk';

const meta = {
    title: 'Icon/System/MovingDesk',
    component: IconSystemMovingDesk,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconSystemMovingDesk>;

export default meta;
type Story = StoryObj<typeof IconSystemMovingDesk>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
