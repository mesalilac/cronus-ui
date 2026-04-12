import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconCalendarWeek } from './IconCalendarWeek';

const meta = {
    title: 'Icon/Calendar/Week',
    component: IconCalendarWeek,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconCalendarWeek>;

export default meta;
type Story = StoryObj<typeof IconCalendarWeek>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
