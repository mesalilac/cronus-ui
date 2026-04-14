import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceSwitchLeft as IconComp } from './IconInterfaceSwitchLeft';

const meta = {
    title: 'Icon/Interface/SwitchLeft',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconSwitchLeft: Story = {
    name: 'SwitchLeft'
    args: {
        size: '6rem',
    },
};
