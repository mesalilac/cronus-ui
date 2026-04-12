import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconMediaSkipForward as IconComp } from './IconMediaSkipForward';

const meta = {
    title: 'Icon/Media/SkipForward',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const SkipForward: Story = {
    args: {
        size: '6rem',
    },
};
