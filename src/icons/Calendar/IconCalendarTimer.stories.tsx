import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconCalendarTimer } from './IconCalendarTimer';

const meta = {
    title: 'Icon/Calendar/Timer',
    component: IconCalendarTimer,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconCalendarTimer>;

export default meta;
type Story = StoryObj<typeof IconCalendarTimer>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
