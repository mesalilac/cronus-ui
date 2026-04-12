import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditAddPlusSquare } from './IconEditAddPlusSquare';

const meta = {
    title: 'Icon/Edit/AddPlusSquare',
    component: IconEditAddPlusSquare,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconEditAddPlusSquare>;

export default meta;
type Story = StoryObj<typeof IconEditAddPlusSquare>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
