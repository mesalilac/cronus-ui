import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowSubRightUp as IconComp } from './IconArrowSubRightUp';

const meta = {
    title: 'Icon/Arrow/SubRightUp',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const SubRightUp: Story = {
    args: {
        size: '6rem',
    },
};
