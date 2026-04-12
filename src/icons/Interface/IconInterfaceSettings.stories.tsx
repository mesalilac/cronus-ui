import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceSettings } from './IconInterfaceSettings';

const meta = {
    title: 'Icon/Interface/Settings',
    component: IconInterfaceSettings,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconInterfaceSettings>;

export default meta;
type Story = StoryObj<typeof IconInterfaceSettings>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
