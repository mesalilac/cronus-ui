import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowSubLeftDown } from './IconArrowSubLeftDown';

const meta = {
    title: 'Icon/Arrow/SubLeftDown',
    component: IconArrowSubLeftDown,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconArrowSubLeftDown>;

export default meta;
type Story = StoryObj<typeof IconArrowSubLeftDown>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
