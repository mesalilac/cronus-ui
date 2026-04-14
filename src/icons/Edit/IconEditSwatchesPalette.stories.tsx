import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditSwatchesPalette as IconComp } from './IconEditSwatchesPalette';

const meta = {
    title: 'Icon/Edit/SwatchesPalette',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconSwatchesPalette: Story = {
    name: 'SwatchesPalette',
    args: {
        size: '6rem',
    },
};
