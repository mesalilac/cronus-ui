import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditLayer } from './IconEditLayer';

const meta = {
    title: 'Icon/Edit/Layer',
    component: IconEditLayer,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconEditLayer>;

export default meta;
type Story = StoryObj<typeof IconEditLayer>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
