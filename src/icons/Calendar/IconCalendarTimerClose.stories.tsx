import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconCalendarTimerClose } from './IconCalendarTimerClose';

const meta = {
    title: 'Icon/Calendar/TimerClose',
    component: IconCalendarTimerClose,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconCalendarTimerClose>;

export default meta;
type Story = StoryObj<typeof IconCalendarTimerClose>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
