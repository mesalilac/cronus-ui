import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditHeadingH1 } from './IconEditHeadingH1';

const meta = {
    title: 'Icon/Edit/HeadingH1',
    component: IconEditHeadingH1,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconEditHeadingH1>;

export default meta;
type Story = StoryObj<typeof IconEditHeadingH1>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
