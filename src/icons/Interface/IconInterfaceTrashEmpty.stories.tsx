import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceTrashEmpty as IconComp } from './IconInterfaceTrashEmpty';

const meta = {
    title: 'Icon/Interface/TrashEmpty',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const TrashEmpty: Story = {
    args: {
        size: '6rem',
    },
};
