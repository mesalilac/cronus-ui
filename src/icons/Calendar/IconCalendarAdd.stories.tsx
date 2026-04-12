import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconCalendarAdd as IconComp } from './IconCalendarAdd';

const meta = {
    title: 'Icon/Calendar/Add',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const Add: Story = {
    args: {
        size: '6rem',
    },
};
