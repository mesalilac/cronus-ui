import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowCaretCircleUp as IconComp } from './IconArrowCaretCircleUp';

const meta = {
    title: 'Icon/Arrow/CaretCircleUp',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconCaretCircleUp: Story = {
    name: 'CaretCircleUp',
    args: {
        size: '6rem',
    },
};
