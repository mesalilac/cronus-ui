import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditTable } from './IconEditTable';

const meta = {
    title: 'Icon/Edit/Table',
    component: IconEditTable,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconEditTable>;

export default meta;
type Story = StoryObj<typeof IconEditTable>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
