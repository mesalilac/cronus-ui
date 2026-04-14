import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowCaretRightSm as IconComp } from './IconArrowCaretRightSm';

const meta = {
    title: 'Icon/Arrow/CaretRightSm',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconCaretRightSm: Story = {
    name: 'CaretRightSm'
    args: {
        size: '6rem',
    },
};
