import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconSystemWindowCheck } from './IconSystemWindowCheck';

const meta = {
    title: 'Icon/System/WindowCheck',
    component: IconSystemWindowCheck,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconSystemWindowCheck>;

export default meta;
type Story = StoryObj<typeof IconSystemWindowCheck>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
