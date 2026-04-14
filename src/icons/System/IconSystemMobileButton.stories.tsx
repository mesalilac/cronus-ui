import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconSystemMobileButton as IconComp } from './IconSystemMobileButton';

const meta = {
    title: 'Icon/System/MobileButton',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconMobileButton: Story = {
    name: 'MobileButton',
    args: {
        size: '6rem',
    },
};
