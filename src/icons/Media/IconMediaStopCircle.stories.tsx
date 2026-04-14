import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconMediaStopCircle as IconComp } from './IconMediaStopCircle';

const meta = {
    title: 'Icon/Media/StopCircle',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconStopCircle: Story = {
    name: 'StopCircle',
    args: {
        size: '6rem',
    },
};
