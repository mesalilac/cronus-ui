import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconFileArchive as IconComp } from './IconFileArchive';

const meta = {
    title: 'Icon/File/Archive',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconArchive: Story = {
    name: 'Archive',
    args: {
        size: '6rem',
    },
};
