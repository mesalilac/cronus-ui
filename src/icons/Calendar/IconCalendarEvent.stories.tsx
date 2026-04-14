import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconCalendarEvent as IconComp } from './IconCalendarEvent';

const meta = {
    title: 'Icon/Calendar/Event',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconEvent: Story = {
    name: 'Event',
    args: {
        size: '6rem',
    },
};
