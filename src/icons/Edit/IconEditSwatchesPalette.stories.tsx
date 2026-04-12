import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditSwatchesPalette } from './IconEditSwatchesPalette';

const meta = {
    title: 'Icon/Edit/SwatchesPalette',
    component: IconEditSwatchesPalette,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconEditSwatchesPalette>;

export default meta;
type Story = StoryObj<typeof IconEditSwatchesPalette>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
