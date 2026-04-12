import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconMediaForward } from './IconMediaForward';

const meta = {
    title: 'Icon/Media/Forward',
    component: IconMediaForward,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconMediaForward>;

export default meta;
type Story = StoryObj<typeof IconMediaForward>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
