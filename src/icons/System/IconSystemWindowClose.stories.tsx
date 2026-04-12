import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconSystemWindowClose } from './IconSystemWindowClose';

const meta = {
    title: 'Icon/System/WindowClose',
    component: IconSystemWindowClose,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconSystemWindowClose>;

export default meta;
type Story = StoryObj<typeof IconSystemWindowClose>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
