import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconFileSearch as IconComp } from './IconFileSearch';

const meta = {
    title: 'Icon/File/Search',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconSearch: Story = {
    name: 'Search'
    args: {
        size: '6rem',
    },
};
