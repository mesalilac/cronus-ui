import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowUnfoldLess } from './IconArrowUnfoldLess';

const meta = {
    title: 'Icon/Arrow/UnfoldLess',
    component: IconArrowUnfoldLess,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconArrowUnfoldLess>;

export default meta;
type Story = StoryObj<typeof IconArrowUnfoldLess>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
