import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconMediaImage01 as IconComp } from './IconMediaImage01';

const meta = {
    title: 'Icon/Media/Image01',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const Image01: Story = {
    args: {
        size: '6rem',
    },
};
