import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditSortAscending as IconComp } from './IconEditSortAscending';

const meta = {
    title: 'Icon/Edit/SortAscending',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconSortAscending: Story = {
    name: 'SortAscending',
    args: {
        size: '6rem',
    },
};
