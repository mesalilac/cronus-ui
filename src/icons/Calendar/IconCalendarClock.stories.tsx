import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconCalendarClock } from './IconCalendarClock';

const meta = {
    title: 'Icon/Calendar/Clock',
    component: IconCalendarClock,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconCalendarClock>;

export default meta;
type Story = StoryObj<typeof IconCalendarClock>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
