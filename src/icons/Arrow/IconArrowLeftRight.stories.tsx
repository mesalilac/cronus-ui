import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowLeftRight as IconComp } from './IconArrowLeftRight';

const meta = {
    title: 'Icon/Arrow/LeftRight',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconLeftRight: Story = {
    name: 'LeftRight',
    args: {
        size: '6rem',
    },
};
