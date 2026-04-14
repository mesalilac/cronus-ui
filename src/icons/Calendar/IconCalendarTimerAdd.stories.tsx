import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconCalendarTimerAdd as IconComp } from './IconCalendarTimerAdd';

const meta = {
    title: 'Icon/Calendar/TimerAdd',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconTimerAdd: Story = {
    name: 'TimerAdd',
    args: {
        size: '6rem',
    },
};
