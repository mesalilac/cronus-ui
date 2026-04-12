import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconMediaSkipForward } from './IconMediaSkipForward';

const meta = {
    title: 'Icon/Media/SkipForward',
    component: IconMediaSkipForward,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconMediaSkipForward>;

export default meta;
type Story = StoryObj<typeof IconMediaSkipForward>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
