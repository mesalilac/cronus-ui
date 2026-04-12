import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconFileRemove } from './IconFileRemove';

const meta = {
    title: 'Icon/File/Remove',
    component: IconFileRemove,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconFileRemove>;

export default meta;
type Story = StoryObj<typeof IconFileRemove>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
