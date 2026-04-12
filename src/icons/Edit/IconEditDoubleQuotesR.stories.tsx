import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditDoubleQuotesR } from './IconEditDoubleQuotesR';

const meta = {
    title: 'Icon/Edit/DoubleQuotesR',
    component: IconEditDoubleQuotesR,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconEditDoubleQuotesR>;

export default meta;
type Story = StoryObj<typeof IconEditDoubleQuotesR>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
