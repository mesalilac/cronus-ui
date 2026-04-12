import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditAddColumn as IconComp } from './IconEditAddColumn';

const meta = {
    title: 'Icon/Edit/AddColumn',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const AddColumn: Story = {
    args: {
        size: '6rem',
    },
};
