import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditTableRemove as IconComp } from './IconEditTableRemove';

const meta = {
    title: 'Icon/Edit/TableRemove',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const TableRemove: Story = {
    args: {
        size: '6rem',
    },
};
