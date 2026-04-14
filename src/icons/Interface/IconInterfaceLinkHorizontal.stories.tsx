import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceLinkHorizontal as IconComp } from './IconInterfaceLinkHorizontal';

const meta = {
    title: 'Icon/Interface/LinkHorizontal',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconLinkHorizontal: Story = {
    name: 'LinkHorizontal'
    args: {
        size: '6rem',
    },
};
