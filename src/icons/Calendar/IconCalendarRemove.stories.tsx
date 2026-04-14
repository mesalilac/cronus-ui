import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconCalendarRemove as IconComp } from './IconCalendarRemove';

const meta = {
    title: 'Icon/Calendar/Remove',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconRemove: Story = {
    name: 'Remove',
    args: {
        size: '6rem',
    },
};
