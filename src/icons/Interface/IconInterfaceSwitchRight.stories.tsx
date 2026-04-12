import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceSwitchRight } from './IconInterfaceSwitchRight';

const meta = {
    title: 'Icon/Interface/SwitchRight',
    component: IconInterfaceSwitchRight,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconInterfaceSwitchRight>;

export default meta;
type Story = StoryObj<typeof IconInterfaceSwitchRight>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
