import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowSubLeftDown as IconComp } from './IconArrowSubLeftDown';

const meta = {
    title: 'Icon/Arrow/SubLeftDown',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const SubLeftDown: Story = {
    args: {
        size: '6rem',
    },
};
