import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconSystemCamera as IconComp } from './IconSystemCamera';

const meta = {
    title: 'Icon/System/Camera',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconCamera: Story = {
    name: 'Camera'
    args: {
        size: '6rem',
    },
};
