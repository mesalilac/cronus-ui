import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditItalic } from './IconEditItalic';

const meta = {
    title: 'Icon/Edit/Italic',
    component: IconEditItalic,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconEditItalic>;

export default meta;
type Story = StoryObj<typeof IconEditItalic>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
