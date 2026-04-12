import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowCaretRightSm } from './IconArrowCaretRightSm';

const meta = {
    title: 'Icon/Arrow/CaretRightSm',
    component: IconArrowCaretRightSm,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconArrowCaretRightSm>;

export default meta;
type Story = StoryObj<typeof IconArrowCaretRightSm>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
