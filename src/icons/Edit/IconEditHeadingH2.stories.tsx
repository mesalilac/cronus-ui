import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditHeadingH2 } from './IconEditHeadingH2';

const meta = {
    title: 'Icon/Edit/HeadingH2',
    component: IconEditHeadingH2,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconEditHeadingH2>;

export default meta;
type Story = StoryObj<typeof IconEditHeadingH2>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
