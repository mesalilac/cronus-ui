import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowUnfoldLess as IconComp } from './IconArrowUnfoldLess';

const meta = {
    title: 'Icon/Arrow/UnfoldLess',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconUnfoldLess: Story = {
    name: 'UnfoldLess',
    args: {
        size: '6rem',
    },
};
