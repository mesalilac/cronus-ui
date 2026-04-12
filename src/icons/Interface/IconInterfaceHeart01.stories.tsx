import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceHeart01 } from './IconInterfaceHeart01';

const meta = {
    title: 'Icon/Interface/Heart01',
    component: IconInterfaceHeart01,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconInterfaceHeart01>;

export default meta;
type Story = StoryObj<typeof IconInterfaceHeart01>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
