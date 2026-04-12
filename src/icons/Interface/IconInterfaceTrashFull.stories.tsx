import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceTrashFull } from './IconInterfaceTrashFull';

const meta = {
    title: 'Icon/Interface/TrashFull',
    component: IconInterfaceTrashFull,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconInterfaceTrashFull>;

export default meta;
type Story = StoryObj<typeof IconInterfaceTrashFull>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
