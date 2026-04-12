import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconMenuCloseMd } from './IconMenuCloseMd';

const meta = {
    title: 'Icon/Menu/CloseMd',
    component: IconMenuCloseMd,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconMenuCloseMd>;

export default meta;
type Story = StoryObj<typeof IconMenuCloseMd>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
