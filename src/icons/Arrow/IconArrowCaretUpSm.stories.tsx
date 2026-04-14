import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowCaretUpSm as IconComp } from './IconArrowCaretUpSm';

const meta = {
    title: 'Icon/Arrow/CaretUpSm',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconCaretUpSm: Story = {
    name: 'CaretUpSm'
    args: {
        size: '6rem',
    },
};
