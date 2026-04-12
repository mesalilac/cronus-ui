import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditLayers as IconComp } from './IconEditLayers';

const meta = {
    title: 'Icon/Edit/Layers',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const Layers: Story = {
    args: {
        size: '6rem',
    },
};
