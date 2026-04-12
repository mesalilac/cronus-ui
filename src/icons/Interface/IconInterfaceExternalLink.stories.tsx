import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceExternalLink } from './IconInterfaceExternalLink';

const meta = {
    title: 'Icon/Interface/ExternalLink',
    component: IconInterfaceExternalLink,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconInterfaceExternalLink>;

export default meta;
type Story = StoryObj<typeof IconInterfaceExternalLink>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
