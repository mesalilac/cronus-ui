import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconMediaPlay } from './IconMediaPlay';

const meta = {
    title: 'Icon/Media/Play',
    component: IconMediaPlay,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconMediaPlay>;

export default meta;
type Story = StoryObj<typeof IconMediaPlay>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
