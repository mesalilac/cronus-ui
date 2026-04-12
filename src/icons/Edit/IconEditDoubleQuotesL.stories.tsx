import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditDoubleQuotesL as IconComp } from './IconEditDoubleQuotesL';

const meta = {
    title: 'Icon/Edit/DoubleQuotesL',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const DoubleQuotesL: Story = {
    args: {
        size: '6rem',
    },
};
