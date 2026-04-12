import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconMediaPlay as IconComp } from './IconMediaPlay';

const meta = {
    title: 'Icon/Media/Play',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const Play: Story = {
    args: {
        size: '6rem',
    },
};
