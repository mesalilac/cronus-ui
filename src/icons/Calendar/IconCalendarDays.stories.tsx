import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconCalendarDays as IconComp } from './IconCalendarDays';

const meta = {
    title: 'Icon/Calendar/Days',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const Days: Story = {
    args: {
        size: '6rem',
    },
};
