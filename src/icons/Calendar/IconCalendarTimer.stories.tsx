import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconCalendarTimer as IconComp } from './IconCalendarTimer';

const meta = {
    title: 'Icon/Calendar/Timer',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconTimer: Story = {
    name: 'Timer',
    args: {
        size: '6rem',
    },
};
