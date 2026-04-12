import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconMediaImage01 } from './IconMediaImage01';

const meta = {
    title: 'Icon/Media/Image01',
    component: IconMediaImage01,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconMediaImage01>;

export default meta;
type Story = StoryObj<typeof IconMediaImage01>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
