import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconShapeWavy } from './IconShapeWavy';

const meta = {
    title: 'Icon/Shape/Wavy',
    component: IconShapeWavy,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconShapeWavy>;

export default meta;
type Story = StoryObj<typeof IconShapeWavy>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
