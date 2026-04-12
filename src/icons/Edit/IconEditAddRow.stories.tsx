import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditAddRow as IconComp } from './IconEditAddRow';

const meta = {
    title: 'Icon/Edit/AddRow',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const AddRow: Story = {
    args: {
        size: '6rem',
    },
};
