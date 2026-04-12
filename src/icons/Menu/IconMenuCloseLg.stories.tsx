import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconMenuCloseLg as IconComp } from './IconMenuCloseLg';

const meta = {
    title: 'Icon/Menu/CloseLg',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const CloseLg: Story = {
    args: {
        size: '6rem',
    },
};
