import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowCaretLeftSm } from './IconArrowCaretLeftSm';

const meta = {
    title: 'Icon/Arrow/CaretLeftSm',
    component: IconArrowCaretLeftSm,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconArrowCaretLeftSm>;

export default meta;
type Story = StoryObj<typeof IconArrowCaretLeftSm>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
