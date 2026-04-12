import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditDoubleQuotesR as IconComp } from './IconEditDoubleQuotesR';

const meta = {
    title: 'Icon/Edit/DoubleQuotesR',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const DoubleQuotesR: Story = {
    args: {
        size: '6rem',
    },
};
