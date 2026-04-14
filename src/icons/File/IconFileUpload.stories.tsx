import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconFileUpload as IconComp } from './IconFileUpload';

const meta = {
    title: 'Icon/File/Upload',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconUpload: Story = {
    name: 'Upload'
    args: {
        size: '6rem',
    },
};
