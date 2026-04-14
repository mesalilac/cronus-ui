import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconSystemMobile as IconComp } from './IconSystemMobile';

const meta = {
    title: 'Icon/System/Mobile',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconMobile: Story = {
    name: 'Mobile'
    args: {
        size: '6rem',
    },
};
