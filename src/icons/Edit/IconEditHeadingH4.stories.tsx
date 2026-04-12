import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditHeadingH4 } from './IconEditHeadingH4';

const meta = {
    title: 'Icon/Edit/HeadingH4',
    component: IconEditHeadingH4,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconEditHeadingH4>;

export default meta;
type Story = StoryObj<typeof IconEditHeadingH4>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
