import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditTableRemove } from './IconEditTableRemove';

const meta = {
    title: 'Icon/Edit/TableRemove',
    component: IconEditTableRemove,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconEditTableRemove>;

export default meta;
type Story = StoryObj<typeof IconEditTableRemove>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
