import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconFileNote } from './IconFileNote';

const meta = {
    title: 'Icon/File/Note',
    component: IconFileNote,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconFileNote>;

export default meta;
type Story = StoryObj<typeof IconFileNote>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
