import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditSingleQuotesL } from './IconEditSingleQuotesL';

const meta = {
    title: 'Icon/Edit/SingleQuotesL',
    component: IconEditSingleQuotesL,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconEditSingleQuotesL>;

export default meta;
type Story = StoryObj<typeof IconEditSingleQuotesL>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
