import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowRightLg as IconComp } from './IconArrowRightLg';

const meta = {
    title: 'Icon/Arrow/RightLg',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconRightLg: Story = {
    name: 'RightLg',
    args: {
        size: '6rem',
    },
};
