import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditCrop } from './IconEditCrop';

const meta = {
    title: 'Icon/Edit/Crop',
    component: IconEditCrop,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconEditCrop>;

export default meta;
type Story = StoryObj<typeof IconEditCrop>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
