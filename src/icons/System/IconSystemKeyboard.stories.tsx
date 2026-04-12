import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconSystemKeyboard } from './IconSystemKeyboard';

const meta = {
    title: 'Icon/System/Keyboard',
    component: IconSystemKeyboard,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconSystemKeyboard>;

export default meta;
type Story = StoryObj<typeof IconSystemKeyboard>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
