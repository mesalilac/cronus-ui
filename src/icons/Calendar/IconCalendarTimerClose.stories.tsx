import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconCalendarTimerClose as IconComp } from './IconCalendarTimerClose';

const meta = {
    title: 'Icon/Calendar/TimerClose',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconTimerClose: Story = {
    name: 'TimerClose',
    args: {
        size: '6rem',
    },
};
