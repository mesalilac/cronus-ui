import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconShapeOctagon } from './IconShapeOctagon';

const meta = {
    title: 'Icon/Shape/Octagon',
    component: IconShapeOctagon,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconShapeOctagon>;

export default meta;
type Story = StoryObj<typeof IconShapeOctagon>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
