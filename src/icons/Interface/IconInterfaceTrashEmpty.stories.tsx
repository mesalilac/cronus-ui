import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceTrashEmpty } from './IconInterfaceTrashEmpty';

const meta = {
    title: 'Icon/Interface/TrashEmpty',
    component: IconInterfaceTrashEmpty,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconInterfaceTrashEmpty>;

export default meta;
type Story = StoryObj<typeof IconInterfaceTrashEmpty>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
