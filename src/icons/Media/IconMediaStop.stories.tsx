import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconMediaStop } from './IconMediaStop';

const meta = {
    title: 'Icon/Media/Stop',
    component: IconMediaStop,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconMediaStop>;

export default meta;
type Story = StoryObj<typeof IconMediaStop>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
