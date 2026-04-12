import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconMediaSkipBack } from './IconMediaSkipBack';

const meta = {
    title: 'Icon/Media/SkipBack',
    component: IconMediaSkipBack,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconMediaSkipBack>;

export default meta;
type Story = StoryObj<typeof IconMediaSkipBack>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
