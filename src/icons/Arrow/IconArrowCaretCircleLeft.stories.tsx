import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowCaretCircleLeft as IconComp } from './IconArrowCaretCircleLeft';

const meta = {
    title: 'Icon/Arrow/CaretCircleLeft',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconCaretCircleLeft: Story = {
    name: 'CaretCircleLeft'
    args: {
        size: '6rem',
    },
};
