import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceHeart02 as IconComp } from './IconInterfaceHeart02';

const meta = {
    title: 'Icon/Interface/Heart02',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconHeart02: Story = {
    name: 'Heart02'
    args: {
        size: '6rem',
    },
};
