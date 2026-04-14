import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceDragHorizontal as IconComp } from './IconInterfaceDragHorizontal';

const meta = {
    title: 'Icon/Interface/DragHorizontal',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconDragHorizontal: Story = {
    name: 'DragHorizontal'
    args: {
        size: '6rem',
    },
};
