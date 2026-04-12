import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowSubRightDown as IconComp } from './IconArrowSubRightDown';

const meta = {
    title: 'Icon/Arrow/SubRightDown',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const SubRightDown: Story = {
    args: {
        size: '6rem',
    },
};
