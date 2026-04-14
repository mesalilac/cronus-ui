import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceSettings as IconComp } from './IconInterfaceSettings';

const meta = {
    title: 'Icon/Interface/Settings',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconSettings: Story = {
    name: 'Settings',
    args: {
        size: '6rem',
    },
};
