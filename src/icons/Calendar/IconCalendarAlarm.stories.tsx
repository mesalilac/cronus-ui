import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconCalendarAlarm as IconComp } from './IconCalendarAlarm';

const meta = {
    title: 'Icon/Calendar/Alarm',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconAlarm: Story = {
    name: 'Alarm',
    args: {
        size: '6rem',
    },
};
