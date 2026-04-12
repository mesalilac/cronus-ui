import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconFileClose } from './IconFileClose';

const meta = {
    title: 'Icon/File/Close',
    component: IconFileClose,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconFileClose>;

export default meta;
type Story = StoryObj<typeof IconFileClose>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
