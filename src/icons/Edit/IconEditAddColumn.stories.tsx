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

export const IconAddColumn: Story = {
    name: 'AddColumn',
    args: {
        size: '6rem',
    },
};
