import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconMediaPauseCircle as IconComp } from './IconMediaPauseCircle';

const meta = {
    title: 'Icon/Media/PauseCircle',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const PauseCircle: Story = {
    args: {
        size: '6rem',
    },
};
