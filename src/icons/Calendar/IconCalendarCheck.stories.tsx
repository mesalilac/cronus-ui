import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconCalendarCheck as IconComp } from './IconCalendarCheck';

const meta = {
    title: 'Icon/Calendar/Check',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconCheck: Story = {
    name: 'Check',
    args: {
        size: '6rem',
    },
};
