import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconFileRemove as IconComp } from './IconFileRemove';

const meta = {
    title: 'Icon/File/Remove',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconRemove: Story = {
    name: 'Remove',
    args: {
        size: '6rem',
    },
};
