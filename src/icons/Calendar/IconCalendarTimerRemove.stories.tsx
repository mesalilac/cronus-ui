import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconCalendarTimerRemove } from './IconCalendarTimerRemove';

const meta = {
    title: 'Icon/Calendar/TimerRemove',
    component: IconCalendarTimerRemove,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconCalendarTimerRemove>;

export default meta;
type Story = StoryObj<typeof IconCalendarTimerRemove>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
