import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconMenuAlt05 as IconComp } from './IconMenuAlt05';

const meta = {
    title: 'Icon/Menu/Alt05',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const Alt05: Story = {
    args: {
        size: '6rem',
    },
};
