import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconMenuCloseMd as IconComp } from './IconMenuCloseMd';

const meta = {
    title: 'Icon/Menu/CloseMd',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const CloseMd: Story = {
    args: {
        size: '6rem',
    },
};
