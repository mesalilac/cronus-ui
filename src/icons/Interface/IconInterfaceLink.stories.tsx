import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceLink as IconComp } from './IconInterfaceLink';

const meta = {
    title: 'Icon/Interface/Link',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconLink: Story = {
    name: 'Link'
    args: {
        size: '6rem',
    },
};
