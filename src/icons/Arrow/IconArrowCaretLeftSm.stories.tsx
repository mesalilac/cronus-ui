import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowCaretLeftSm as IconComp } from './IconArrowCaretLeftSm';

const meta = {
    title: 'Icon/Arrow/CaretLeftSm',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const CaretLeftSm: Story = {
    args: {
        size: '6rem',
    },
};
