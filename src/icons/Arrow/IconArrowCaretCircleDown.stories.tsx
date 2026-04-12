import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowCaretCircleDown } from './IconArrowCaretCircleDown';

const meta = {
    title: 'Icon/Arrow/CaretCircleDown',
    component: IconArrowCaretCircleDown,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconArrowCaretCircleDown>;

export default meta;
type Story = StoryObj<typeof IconArrowCaretCircleDown>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
