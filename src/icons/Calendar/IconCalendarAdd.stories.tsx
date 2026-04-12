import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconCalendarAdd } from './IconCalendarAdd';

const meta = {
    title: 'Icon/Calendar/Add',
    component: IconCalendarAdd,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconCalendarAdd>;

export default meta;
type Story = StoryObj<typeof IconCalendarAdd>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
