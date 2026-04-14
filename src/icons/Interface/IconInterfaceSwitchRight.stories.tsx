import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceSwitchRight as IconComp } from './IconInterfaceSwitchRight';

const meta = {
    title: 'Icon/Interface/SwitchRight',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconSwitchRight: Story = {
    name: 'SwitchRight',
    args: {
        size: '6rem',
    },
};
