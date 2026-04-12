import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditTextAlignJustify } from './IconEditTextAlignJustify';

const meta = {
    title: 'Icon/Edit/TextAlignJustify',
    component: IconEditTextAlignJustify,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconEditTextAlignJustify>;

export default meta;
type Story = StoryObj<typeof IconEditTextAlignJustify>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
