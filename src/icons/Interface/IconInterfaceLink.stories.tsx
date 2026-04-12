import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceLink } from './IconInterfaceLink';

const meta = {
    title: 'Icon/Interface/Link',
    component: IconInterfaceLink,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconInterfaceLink>;

export default meta;
type Story = StoryObj<typeof IconInterfaceLink>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
