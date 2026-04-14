import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconFileEdit as IconComp } from './IconFileEdit';

const meta = {
    title: 'Icon/File/Edit',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconEdit: Story = {
    name: 'Edit',
    args: {
        size: '6rem',
    },
};
