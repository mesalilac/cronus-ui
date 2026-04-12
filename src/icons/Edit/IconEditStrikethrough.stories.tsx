import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditStrikethrough } from './IconEditStrikethrough';

const meta = {
    title: 'Icon/Edit/Strikethrough',
    component: IconEditStrikethrough,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconEditStrikethrough>;

export default meta;
type Story = StoryObj<typeof IconEditStrikethrough>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
