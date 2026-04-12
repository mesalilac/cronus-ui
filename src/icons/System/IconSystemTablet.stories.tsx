import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconSystemTablet } from './IconSystemTablet';

const meta = {
    title: 'Icon/System/Tablet',
    component: IconSystemTablet,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconSystemTablet>;

export default meta;
type Story = StoryObj<typeof IconSystemTablet>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
