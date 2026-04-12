import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconCalendarClose } from './IconCalendarClose';

const meta = {
    title: 'Icon/Calendar/Close',
    component: IconCalendarClose,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconCalendarClose>;

export default meta;
type Story = StoryObj<typeof IconCalendarClose>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
