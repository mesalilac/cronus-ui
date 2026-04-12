import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditSingleQuotesR } from './IconEditSingleQuotesR';

const meta = {
    title: 'Icon/Edit/SingleQuotesR',
    component: IconEditSingleQuotesR,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconEditSingleQuotesR>;

export default meta;
type Story = StoryObj<typeof IconEditSingleQuotesR>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
