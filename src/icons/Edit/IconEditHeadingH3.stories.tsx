import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditHeadingH3 } from './IconEditHeadingH3';

const meta = {
    title: 'Icon/Edit/HeadingH3',
    component: IconEditHeadingH3,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconEditHeadingH3>;

export default meta;
type Story = StoryObj<typeof IconEditHeadingH3>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
