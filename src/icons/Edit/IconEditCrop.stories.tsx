import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditCrop as IconComp } from './IconEditCrop';

const meta = {
    title: 'Icon/Edit/Crop',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconCrop: Story = {
    name: 'Crop',
    args: {
        size: '6rem',
    },
};
