import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconCalendarClose as IconComp } from './IconCalendarClose';

const meta = {
    title: 'Icon/Calendar/Close',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconClose: Story = {
    name: 'Close'
    args: {
        size: '6rem',
    },
};
