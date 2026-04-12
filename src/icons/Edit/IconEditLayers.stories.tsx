import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditLayers } from './IconEditLayers';

const meta = {
    title: 'Icon/Edit/Layers',
    component: IconEditLayers,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconEditLayers>;

export default meta;
type Story = StoryObj<typeof IconEditLayers>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
