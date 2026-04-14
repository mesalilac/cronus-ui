import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceInstance as IconComp } from './IconInterfaceInstance';

const meta = {
    title: 'Icon/Interface/Instance',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconInstance: Story = {
    name: 'Instance'
    args: {
        size: '6rem',
    },
};
