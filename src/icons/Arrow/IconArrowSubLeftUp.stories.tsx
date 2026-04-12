import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowSubLeftUp } from './IconArrowSubLeftUp';

const meta = {
    title: 'Icon/Arrow/SubLeftUp',
    component: IconArrowSubLeftUp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconArrowSubLeftUp>;

export default meta;
type Story = StoryObj<typeof IconArrowSubLeftUp>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
