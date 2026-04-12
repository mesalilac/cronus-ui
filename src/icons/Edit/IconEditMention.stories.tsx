import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditMention } from './IconEditMention';

const meta = {
    title: 'Icon/Edit/Mention',
    component: IconEditMention,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconEditMention>;

export default meta;
type Story = StoryObj<typeof IconEditMention>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
