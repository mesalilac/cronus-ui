import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceFilterOff } from './IconInterfaceFilterOff';

const meta = {
    title: 'Icon/Interface/FilterOff',
    component: IconInterfaceFilterOff,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconInterfaceFilterOff>;

export default meta;
type Story = StoryObj<typeof IconInterfaceFilterOff>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
