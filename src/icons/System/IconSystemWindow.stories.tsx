import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconSystemWindow } from './IconSystemWindow';

const meta = {
    title: 'Icon/System/Window',
    component: IconSystemWindow,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconSystemWindow>;

export default meta;
type Story = StoryObj<typeof IconSystemWindow>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
