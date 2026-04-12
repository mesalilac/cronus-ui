import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditTableAdd } from './IconEditTableAdd';

const meta = {
    title: 'Icon/Edit/TableAdd',
    component: IconEditTableAdd,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconEditTableAdd>;

export default meta;
type Story = StoryObj<typeof IconEditTableAdd>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
