import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconFileAdd } from './IconFileAdd';

const meta = {
    title: 'Icon/File/Add',
    component: IconFileAdd,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconFileAdd>;

export default meta;
type Story = StoryObj<typeof IconFileAdd>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
