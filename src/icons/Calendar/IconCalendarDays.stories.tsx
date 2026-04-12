import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconCalendarDays } from './IconCalendarDays';

const meta = {
    title: 'Icon/Calendar/Days',
    component: IconCalendarDays,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconCalendarDays>;

export default meta;
type Story = StoryObj<typeof IconCalendarDays>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
