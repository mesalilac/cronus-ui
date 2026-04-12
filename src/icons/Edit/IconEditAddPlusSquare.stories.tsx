import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditAddPlusSquare as IconComp } from './IconEditAddPlusSquare';

const meta = {
    title: 'Icon/Edit/AddPlusSquare',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const AddPlusSquare: Story = {
    args: {
        size: '6rem',
    },
};
