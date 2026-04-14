import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconFileNote as IconComp } from './IconFileNote';

const meta = {
    title: 'Icon/File/Note',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconNote: Story = {
    name: 'Note'
    args: {
        size: '6rem',
    },
};
