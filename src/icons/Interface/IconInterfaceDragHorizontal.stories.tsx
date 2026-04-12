import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceDragHorizontal } from './IconInterfaceDragHorizontal';

const meta = {
    title: 'Icon/Interface/DragHorizontal',
    component: IconInterfaceDragHorizontal,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconInterfaceDragHorizontal>;

export default meta;
type Story = StoryObj<typeof IconInterfaceDragHorizontal>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
