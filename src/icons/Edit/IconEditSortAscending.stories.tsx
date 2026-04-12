import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditSortAscending } from './IconEditSortAscending';

const meta = {
    title: 'Icon/Edit/SortAscending',
    component: IconEditSortAscending,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconEditSortAscending>;

export default meta;
type Story = StoryObj<typeof IconEditSortAscending>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
