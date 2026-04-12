import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconCalendar } from './IconCalendar';

const meta = {
    title: 'Icon/Calendar',
    component: IconCalendar,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconCalendar>;

export default meta;
type Story = StoryObj<typeof IconCalendar>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
