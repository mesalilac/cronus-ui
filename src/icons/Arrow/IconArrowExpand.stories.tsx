import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowExpand as IconComp } from './IconArrowExpand';

const meta = {
    title: 'Icon/Arrow/Expand',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const Expand: Story = {
    args: {
        size: '6rem',
    },
};
