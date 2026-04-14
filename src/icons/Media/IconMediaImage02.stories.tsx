import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconMediaImage02 as IconComp } from './IconMediaImage02';

const meta = {
    title: 'Icon/Media/Image02',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconImage02: Story = {
    name: 'Image02',
    args: {
        size: '6rem',
    },
};
