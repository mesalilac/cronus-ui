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

export const IconAlt05: Story = {
    name: 'Alt05'
    args: {
        size: '6rem',
    },
};
