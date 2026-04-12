import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowLeftLg as IconComp } from './IconArrowLeftLg';

const meta = {
    title: 'Icon/Arrow/LeftLg',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const LeftLg: Story = {
    args: {
        size: '6rem',
    },
};
