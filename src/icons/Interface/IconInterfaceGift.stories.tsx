import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceGift as IconComp } from './IconInterfaceGift';

const meta = {
    title: 'Icon/Interface/Gift',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconGift: Story = {
    name: 'Gift',
    args: {
        size: '6rem',
    },
};
