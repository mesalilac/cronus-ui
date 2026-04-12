import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconCalendarRemove } from './IconCalendarRemove';

const meta = {
    title: 'Icon/Calendar/Remove',
    component: IconCalendarRemove,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconCalendarRemove>;

export default meta;
type Story = StoryObj<typeof IconCalendarRemove>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
