import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconMenuAlt04 } from './IconMenuAlt04';

const meta = {
    title: 'Icon/Menu/Alt04',
    component: IconMenuAlt04,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconMenuAlt04>;

export default meta;
type Story = StoryObj<typeof IconMenuAlt04>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
