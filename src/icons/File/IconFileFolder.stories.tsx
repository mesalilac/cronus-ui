import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconFileFolder as IconComp } from './IconFileFolder';

const meta = {
    title: 'Icon/File/Folder',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const Folder: Story = {
    args: {
        size: '6rem',
    },
};
