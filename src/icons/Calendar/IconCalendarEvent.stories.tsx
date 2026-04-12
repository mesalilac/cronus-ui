import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconCalendarEvent } from './IconCalendarEvent';

const meta = {
    title: 'Icon/Calendar/Event',
    component: IconCalendarEvent,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconCalendarEvent>;

export default meta;
type Story = StoryObj<typeof IconCalendarEvent>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
