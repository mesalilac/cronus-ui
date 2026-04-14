import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconMediaPause as IconComp } from './IconMediaPause';

const meta = {
    title: 'Icon/Media/Pause',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconPause: Story = {
    name: 'Pause',
    args: {
        size: '6rem',
    },
};
