import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconSystemMobileButton } from './IconSystemMobileButton';

const meta = {
    title: 'Icon/System/MobileButton',
    component: IconSystemMobileButton,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconSystemMobileButton>;

export default meta;
type Story = StoryObj<typeof IconSystemMobileButton>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
