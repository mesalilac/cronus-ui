import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowCaretCircleRight as IconComp } from './IconArrowCaretCircleRight';

const meta = {
    title: 'Icon/Arrow/CaretCircleRight',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconCaretCircleRight: Story = {
    name: 'CaretCircleRight',
    args: {
        size: '6rem',
    },
};
