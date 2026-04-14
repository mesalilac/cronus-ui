import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceExternalLink as IconComp } from './IconInterfaceExternalLink';

const meta = {
    title: 'Icon/Interface/ExternalLink',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconExternalLink: Story = {
    name: 'ExternalLink',
    args: {
        size: '6rem',
    },
};
