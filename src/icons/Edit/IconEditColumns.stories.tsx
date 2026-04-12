import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditColumns } from './IconEditColumns';

const meta = {
    title: 'Icon/Edit/Columns',
    component: IconEditColumns,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconEditColumns>;

export default meta;
type Story = StoryObj<typeof IconEditColumns>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
