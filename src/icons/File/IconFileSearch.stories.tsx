import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconFileSearch } from './IconFileSearch';

const meta = {
    title: 'Icon/File/Search',
    component: IconFileSearch,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconFileSearch>;

export default meta;
type Story = StoryObj<typeof IconFileSearch>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
