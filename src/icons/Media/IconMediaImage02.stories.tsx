import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconMediaImage02 } from './IconMediaImage02';

const meta = {
    title: 'Icon/Media/Image02',
    component: IconMediaImage02,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconMediaImage02>;

export default meta;
type Story = StoryObj<typeof IconMediaImage02>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
