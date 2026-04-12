import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconCalendarCheck } from './IconCalendarCheck';

const meta = {
    title: 'Icon/Calendar/Check',
    component: IconCalendarCheck,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconCalendarCheck>;

export default meta;
type Story = StoryObj<typeof IconCalendarCheck>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
