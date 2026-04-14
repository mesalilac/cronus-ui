import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconMediaHeadphones as IconComp } from './IconMediaHeadphones';

const meta = {
    title: 'Icon/Media/Headphones',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconHeadphones: Story = {
    name: 'Headphones',
    args: {
        size: '6rem',
    },
};
