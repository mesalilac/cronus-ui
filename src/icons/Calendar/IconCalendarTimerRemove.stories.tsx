import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconCalendarTimerRemove as IconComp } from './IconCalendarTimerRemove';

const meta = {
    title: 'Icon/Calendar/TimerRemove',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const TimerRemove: Story = {
    args: {
        size: '6rem',
    },
};
