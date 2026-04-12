import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceSettingsFuture } from './IconInterfaceSettingsFuture';

const meta = {
    title: 'Icon/Interface/SettingsFuture',
    component: IconInterfaceSettingsFuture,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconInterfaceSettingsFuture>;

export default meta;
type Story = StoryObj<typeof IconInterfaceSettingsFuture>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
