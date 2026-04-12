import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceSwitchLeft } from './IconInterfaceSwitchLeft';

const meta = {
    title: 'Icon/Interface/SwitchLeft',
    component: IconInterfaceSwitchLeft,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconInterfaceSwitchLeft>;

export default meta;
type Story = StoryObj<typeof IconInterfaceSwitchLeft>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
