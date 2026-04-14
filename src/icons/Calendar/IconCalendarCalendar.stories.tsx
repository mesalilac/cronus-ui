import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconCalendarCalendar as IconComp } from './IconCalendarCalendar';

const meta = {
    title: 'Icon/Calendar/Calendar',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconCalendar: Story = {
    name: 'Calendar'
    args: {
        size: '6rem',
    },
};
