import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconShapeOctagon as IconComp } from './IconShapeOctagon';

const meta = {
    title: 'Icon/Shape/Octagon',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconOctagon: Story = {
    name: 'Octagon'
    args: {
        size: '6rem',
    },
};
