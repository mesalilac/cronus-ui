import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconMenuCloseLg } from './IconMenuCloseLg';

const meta = {
    title: 'Icon/Menu/CloseLg',
    component: IconMenuCloseLg,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconMenuCloseLg>;

export default meta;
type Story = StoryObj<typeof IconMenuCloseLg>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
