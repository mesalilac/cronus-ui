import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceHandbag as IconComp } from './IconInterfaceHandbag';

const meta = {
    title: 'Icon/Interface/Handbag',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconHandbag: Story = {
    name: 'Handbag'
    args: {
        size: '6rem',
    },
};
