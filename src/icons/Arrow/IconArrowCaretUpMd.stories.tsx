import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowCaretUpMd as IconComp } from './IconArrowCaretUpMd';

const meta = {
    title: 'Icon/Arrow/CaretUpMd',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconCaretUpMd: Story = {
    name: 'CaretUpMd'
    args: {
        size: '6rem',
    },
};
