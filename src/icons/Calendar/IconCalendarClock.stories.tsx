import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconCalendarClock as IconComp } from './IconCalendarClock';

const meta = {
    title: 'Icon/Calendar/Clock',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconClock: Story = {
    name: 'Clock'
    args: {
        size: '6rem',
    },
};
