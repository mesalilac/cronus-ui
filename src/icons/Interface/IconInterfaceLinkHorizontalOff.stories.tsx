import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceLinkHorizontalOff as IconComp } from './IconInterfaceLinkHorizontalOff';

const meta = {
    title: 'Icon/Interface/LinkHorizontalOff',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconLinkHorizontalOff: Story = {
    name: 'LinkHorizontalOff'
    args: {
        size: '6rem',
    },
};
