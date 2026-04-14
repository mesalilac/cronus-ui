import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconFileBlank as IconComp } from './IconFileBlank';

const meta = {
    title: 'Icon/File/Blank',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconBlank: Story = {
    name: 'Blank',
    args: {
        size: '6rem',
    },
};
