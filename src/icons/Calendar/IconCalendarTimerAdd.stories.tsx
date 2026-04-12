import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconCalendarTimerAdd } from './IconCalendarTimerAdd';

const meta = {
    title: 'Icon/Calendar/TimerAdd',
    component: IconCalendarTimerAdd,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconCalendarTimerAdd>;

export default meta;
type Story = StoryObj<typeof IconCalendarTimerAdd>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
