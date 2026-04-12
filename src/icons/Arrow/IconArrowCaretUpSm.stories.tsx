import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowCaretUpSm } from './IconArrowCaretUpSm';

const meta = {
    title: 'Icon/Arrow/CaretUpSm',
    component: IconArrowCaretUpSm,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconArrowCaretUpSm>;

export default meta;
type Story = StoryObj<typeof IconArrowCaretUpSm>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
