import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconFileDocument } from './IconFileDocument';

const meta = {
    title: 'Icon/File/Document',
    component: IconFileDocument,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconFileDocument>;

export default meta;
type Story = StoryObj<typeof IconFileDocument>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
