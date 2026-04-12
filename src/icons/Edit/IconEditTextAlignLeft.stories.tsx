import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditTextAlignLeft } from './IconEditTextAlignLeft';

const meta = {
    title: 'Icon/Edit/TextAlignLeft',
    component: IconEditTextAlignLeft,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconEditTextAlignLeft>;

export default meta;
type Story = StoryObj<typeof IconEditTextAlignLeft>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
