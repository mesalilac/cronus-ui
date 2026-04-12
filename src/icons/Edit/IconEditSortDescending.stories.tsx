import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditSortDescending as IconComp } from './IconEditSortDescending';

const meta = {
    title: 'Icon/Edit/SortDescending',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const SortDescending: Story = {
    args: {
        size: '6rem',
    },
};
