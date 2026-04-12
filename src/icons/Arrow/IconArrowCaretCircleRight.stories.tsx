import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowCaretCircleRight } from './IconArrowCaretCircleRight';

const meta = {
    title: 'Icon/Arrow/CaretCircleRight',
    component: IconArrowCaretCircleRight,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconArrowCaretCircleRight>;

export default meta;
type Story = StoryObj<typeof IconArrowCaretCircleRight>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
