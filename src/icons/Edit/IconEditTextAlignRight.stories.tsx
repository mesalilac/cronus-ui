import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditTextAlignRight } from './IconEditTextAlignRight';

const meta = {
    title: 'Icon/Edit/TextAlignRight',
    component: IconEditTextAlignRight,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconEditTextAlignRight>;

export default meta;
type Story = StoryObj<typeof IconEditTextAlignRight>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
