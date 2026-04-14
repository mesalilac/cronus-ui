import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceSettingsFuture as IconComp } from './IconInterfaceSettingsFuture';

const meta = {
    title: 'Icon/Interface/SettingsFuture',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconSettingsFuture: Story = {
    name: 'SettingsFuture',
    args: {
        size: '6rem',
    },
};
