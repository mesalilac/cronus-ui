import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceLinkBreak as IconComp } from './IconInterfaceLinkBreak';

const meta = {
    title: 'Icon/Interface/LinkBreak',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconLinkBreak: Story = {
    name: 'LinkBreak'
    args: {
        size: '6rem',
    },
};
