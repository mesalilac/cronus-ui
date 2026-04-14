import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditLayer as IconComp } from './IconEditLayer';

const meta = {
    title: 'Icon/Edit/Layer',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconLayer: Story = {
    name: 'Layer'
    args: {
        size: '6rem',
    },
};
