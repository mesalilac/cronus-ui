import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconSystemMobile } from './IconSystemMobile';

const meta = {
    title: 'Icon/System/Mobile',
    component: IconSystemMobile,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconSystemMobile>;

export default meta;
type Story = StoryObj<typeof IconSystemMobile>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
