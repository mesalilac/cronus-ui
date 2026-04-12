import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowExpand } from './IconArrowExpand';

const meta = {
    title: 'Icon/Arrow/Expand',
    component: IconArrowExpand,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconArrowExpand>;

export default meta;
type Story = StoryObj<typeof IconArrowExpand>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
