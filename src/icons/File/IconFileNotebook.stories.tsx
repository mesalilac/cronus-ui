import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconFileNotebook as IconComp } from './IconFileNotebook';

const meta = {
    title: 'Icon/File/Notebook',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const Notebook: Story = {
    args: {
        size: '6rem',
    },
};
