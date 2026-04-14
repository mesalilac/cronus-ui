import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceCommand as IconComp } from './IconInterfaceCommand';

const meta = {
    title: 'Icon/Interface/Command',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconCommand: Story = {
    name: 'Command'
    args: {
        size: '6rem',
    },
};
