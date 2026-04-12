import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditAddPlusCircle } from './IconEditAddPlusCircle';

const meta = {
    title: 'Icon/Edit/AddPlusCircle',
    component: IconEditAddPlusCircle,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconEditAddPlusCircle>;

export default meta;
type Story = StoryObj<typeof IconEditAddPlusCircle>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
