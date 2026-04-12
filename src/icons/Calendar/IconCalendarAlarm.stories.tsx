import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconCalendarAlarm } from './IconCalendarAlarm';

const meta = {
    title: 'Icon/Calendar/Alarm',
    component: IconCalendarAlarm,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconCalendarAlarm>;

export default meta;
type Story = StoryObj<typeof IconCalendarAlarm>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
