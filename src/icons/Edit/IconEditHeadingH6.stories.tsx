import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditHeadingH6 } from './IconEditHeadingH6';

const meta = {
    title: 'Icon/Edit/HeadingH6',
    component: IconEditHeadingH6,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconEditHeadingH6>;

export default meta;
type Story = StoryObj<typeof IconEditHeadingH6>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
