import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconShapeShield } from './IconShapeShield';

const meta = {
    title: 'Icon/Shape/Shield',
    component: IconShapeShield,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconShapeShield>;

export default meta;
type Story = StoryObj<typeof IconShapeShield>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
