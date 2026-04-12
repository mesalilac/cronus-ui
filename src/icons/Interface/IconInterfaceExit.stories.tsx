import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceExit as IconComp } from './IconInterfaceExit';

const meta = {
    title: 'Icon/Interface/Exit',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const Exit: Story = {
    args: {
        size: '6rem',
    },
};
