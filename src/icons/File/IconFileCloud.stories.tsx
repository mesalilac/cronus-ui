import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconFileCloud as IconComp } from './IconFileCloud';

const meta = {
    title: 'Icon/File/Cloud',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const Cloud: Story = {
    args: {
        size: '6rem',
    },
};
