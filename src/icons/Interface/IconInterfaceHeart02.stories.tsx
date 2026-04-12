import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceHeart02 } from './IconInterfaceHeart02';

const meta = {
    title: 'Icon/Interface/Heart02',
    component: IconInterfaceHeart02,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconInterfaceHeart02>;

export default meta;
type Story = StoryObj<typeof IconInterfaceHeart02>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
