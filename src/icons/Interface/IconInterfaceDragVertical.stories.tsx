import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceDragVertical as IconComp } from './IconInterfaceDragVertical';

const meta = {
    title: 'Icon/Interface/DragVertical',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconDragVertical: Story = {
    name: 'DragVertical',
    args: {
        size: '6rem',
    },
};
