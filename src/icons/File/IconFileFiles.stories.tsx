import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconFileFiles as IconComp } from './IconFileFiles';

const meta = {
    title: 'Icon/File/Files',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconFiles: Story = {
    name: 'Files',
    args: {
        size: '6rem',
    },
};
