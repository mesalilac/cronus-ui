import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditSortDescending } from './IconEditSortDescending';

const meta = {
    title: 'Icon/Edit/SortDescending',
    component: IconEditSortDescending,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconEditSortDescending>;

export default meta;
type Story = StoryObj<typeof IconEditSortDescending>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
