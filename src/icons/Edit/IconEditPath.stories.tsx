import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditPath } from './IconEditPath';

const meta = {
    title: 'Icon/Edit/Path',
    component: IconEditPath,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconEditPath>;

export default meta;
type Story = StoryObj<typeof IconEditPath>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
