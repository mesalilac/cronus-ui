import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowLeftMd as IconComp } from './IconArrowLeftMd';

const meta = {
    title: 'Icon/Arrow/LeftMd',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconLeftMd: Story = {
    name: 'LeftMd',
    args: {
        size: '6rem',
    },
};
