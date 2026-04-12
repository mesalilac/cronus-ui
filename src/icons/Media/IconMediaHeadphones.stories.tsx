import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconMediaHeadphones } from './IconMediaHeadphones';

const meta = {
    title: 'Icon/Media/Headphones',
    component: IconMediaHeadphones,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconMediaHeadphones>;

export default meta;
type Story = StoryObj<typeof IconMediaHeadphones>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
