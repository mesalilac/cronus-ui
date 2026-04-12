import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceDragVertical } from './IconInterfaceDragVertical';

const meta = {
    title: 'Icon/Interface/DragVertical',
    component: IconInterfaceDragVertical,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconInterfaceDragVertical>;

export default meta;
type Story = StoryObj<typeof IconInterfaceDragVertical>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
