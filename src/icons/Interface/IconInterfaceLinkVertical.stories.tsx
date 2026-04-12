import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceLinkVertical as IconComp } from './IconInterfaceLinkVertical';

const meta = {
    title: 'Icon/Interface/LinkVertical',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const LinkVertical: Story = {
    args: {
        size: '6rem',
    },
};
