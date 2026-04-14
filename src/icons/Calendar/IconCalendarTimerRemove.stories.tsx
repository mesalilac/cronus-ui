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

export const IconTimerRemove: Story = {
    name: 'TimerRemove',
    args: {
        size: '6rem',
    },
};
