import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconCalendarWeek as IconComp } from './IconCalendarWeek';

const meta = {
    title: 'Icon/Calendar/Week',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const Week: Story = {
    args: {
        size: '6rem',
    },
};
