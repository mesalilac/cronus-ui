import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconMenuCloseSm } from './IconMenuCloseSm';

const meta = {
    title: 'Icon/Menu/CloseSm',
    component: IconMenuCloseSm,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconMenuCloseSm>;

export default meta;
type Story = StoryObj<typeof IconMenuCloseSm>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
