import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditTableAdd as IconComp } from './IconEditTableAdd';

const meta = {
    title: 'Icon/Edit/TableAdd',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const TableAdd: Story = {
    args: {
        size: '6rem',
    },
};
