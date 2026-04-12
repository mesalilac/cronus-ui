import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowCaretCircleLeft } from './IconArrowCaretCircleLeft';

const meta = {
    title: 'Icon/Arrow/CaretCircleLeft',
    component: IconArrowCaretCircleLeft,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconArrowCaretCircleLeft>;

export default meta;
type Story = StoryObj<typeof IconArrowCaretCircleLeft>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
