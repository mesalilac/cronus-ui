import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceTrashFull as IconComp } from './IconInterfaceTrashFull';

const meta = {
    title: 'Icon/Interface/TrashFull',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconTrashFull: Story = {
    name: 'TrashFull'
    args: {
        size: '6rem',
    },
};
