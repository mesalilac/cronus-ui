import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconMenuCloseSm as IconComp } from './IconMenuCloseSm';

const meta = {
    title: 'Icon/Menu/CloseSm',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconCloseSm: Story = {
    name: 'CloseSm',
    args: {
        size: '6rem',
    },
};
