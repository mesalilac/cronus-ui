import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowCaretCircleDown as IconComp } from './IconArrowCaretCircleDown';

const meta = {
    title: 'Icon/Arrow/CaretCircleDown',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const CaretCircleDown: Story = {
    args: {
        size: '6rem',
    },
};
