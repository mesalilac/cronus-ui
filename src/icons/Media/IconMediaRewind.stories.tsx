import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconMediaRewind } from './IconMediaRewind';

const meta = {
    title: 'Icon/Media/Rewind',
    component: IconMediaRewind,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconMediaRewind>;

export default meta;
type Story = StoryObj<typeof IconMediaRewind>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
