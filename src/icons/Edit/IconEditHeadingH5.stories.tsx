import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditHeadingH5 } from './IconEditHeadingH5';

const meta = {
    title: 'Icon/Edit/HeadingH5',
    component: IconEditHeadingH5,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconEditHeadingH5>;

export default meta;
type Story = StoryObj<typeof IconEditHeadingH5>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
