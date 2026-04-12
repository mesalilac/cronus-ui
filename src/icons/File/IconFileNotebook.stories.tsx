import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconFileNotebook } from './IconFileNotebook';

const meta = {
    title: 'Icon/File/Notebook',
    component: IconFileNotebook,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconFileNotebook>;

export default meta;
type Story = StoryObj<typeof IconFileNotebook>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
