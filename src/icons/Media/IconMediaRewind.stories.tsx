import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconMediaRewind as IconComp } from './IconMediaRewind';

const meta = {
    title: 'Icon/Media/Rewind',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const Rewind: Story = {
    args: {
        size: '6rem',
    },
};
