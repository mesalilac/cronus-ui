import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconFileBlank } from './IconFileBlank';

const meta = {
    title: 'Icon/File/Blank',
    component: IconFileBlank,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconFileBlank>;

export default meta;
type Story = StoryObj<typeof IconFileBlank>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
