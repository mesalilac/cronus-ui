import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowCaretUpMd } from './IconArrowCaretUpMd';

const meta = {
    title: 'Icon/Arrow/CaretUpMd',
    component: IconArrowCaretUpMd,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconArrowCaretUpMd>;

export default meta;
type Story = StoryObj<typeof IconArrowCaretUpMd>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
