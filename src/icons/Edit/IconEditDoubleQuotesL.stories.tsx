import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditDoubleQuotesL } from './IconEditDoubleQuotesL';

const meta = {
    title: 'Icon/Edit/DoubleQuotesL',
    component: IconEditDoubleQuotesL,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconEditDoubleQuotesL>;

export default meta;
type Story = StoryObj<typeof IconEditDoubleQuotesL>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
