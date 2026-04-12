import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconSystemCamera } from './IconSystemCamera';

const meta = {
    title: 'Icon/System/Camera',
    component: IconSystemCamera,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconSystemCamera>;

export default meta;
type Story = StoryObj<typeof IconSystemCamera>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
