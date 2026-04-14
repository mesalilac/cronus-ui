import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowRightMd as IconComp } from './IconArrowRightMd';

const meta = {
    title: 'Icon/Arrow/RightMd',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconRightMd: Story = {
    name: 'RightMd'
    args: {
        size: '6rem',
    },
};
