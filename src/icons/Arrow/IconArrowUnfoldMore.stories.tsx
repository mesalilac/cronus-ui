import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowUnfoldMore as IconComp } from './IconArrowUnfoldMore';

const meta = {
    title: 'Icon/Arrow/UnfoldMore',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconUnfoldMore: Story = {
    name: 'UnfoldMore',
    args: {
        size: '6rem',
    },
};
