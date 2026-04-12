import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconFileCode } from './IconFileCode';

const meta = {
    title: 'Icon/File/Code',
    component: IconFileCode,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconFileCode>;

export default meta;
type Story = StoryObj<typeof IconFileCode>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
