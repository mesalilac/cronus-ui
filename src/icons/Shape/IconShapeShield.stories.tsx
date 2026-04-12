import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconShapeShield as IconComp } from './IconShapeShield';

const meta = {
    title: 'Icon/Shape/Shield',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const Shield: Story = {
    args: {
        size: '6rem',
    },
};
