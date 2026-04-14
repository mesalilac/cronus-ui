import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditAddPlusCircle as IconComp } from './IconEditAddPlusCircle';

const meta = {
    title: 'Icon/Edit/AddPlusCircle',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconAddPlusCircle: Story = {
    name: 'AddPlusCircle'
    args: {
        size: '6rem',
    },
};
