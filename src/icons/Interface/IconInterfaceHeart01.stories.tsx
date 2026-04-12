import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceHeart01 as IconComp } from './IconInterfaceHeart01';

const meta = {
    title: 'Icon/Interface/Heart01',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const Heart01: Story = {
    args: {
        size: '6rem',
    },
};
