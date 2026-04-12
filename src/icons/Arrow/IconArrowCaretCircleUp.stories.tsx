import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowCaretCircleUp } from './IconArrowCaretCircleUp';

const meta = {
    title: 'Icon/Arrow/CaretCircleUp',
    component: IconArrowCaretCircleUp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconArrowCaretCircleUp>;

export default meta;
type Story = StoryObj<typeof IconArrowCaretCircleUp>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
