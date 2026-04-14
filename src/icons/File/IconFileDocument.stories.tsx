import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconFileDocument as IconComp } from './IconFileDocument';

const meta = {
    title: 'Icon/File/Document',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconDocument: Story = {
    name: 'Document'
    args: {
        size: '6rem',
    },
};
