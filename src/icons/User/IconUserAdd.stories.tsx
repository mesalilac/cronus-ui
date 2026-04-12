import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconUserAdd as IconComp } from './IconUserAdd';

const meta = {
    title: 'Icon/User/Add',
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
