import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditTextAlignCenter } from './IconEditTextAlignCenter';

const meta = {
    title: 'Icon/Edit/TextAlignCenter',
    component: IconEditTextAlignCenter,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconEditTextAlignCenter>;

export default meta;
type Story = StoryObj<typeof IconEditTextAlignCenter>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
