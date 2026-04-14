import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconFileCode as IconComp } from './IconFileCode';

const meta = {
    title: 'Icon/File/Code',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconCode: Story = {
    name: 'Code'
    args: {
        size: '6rem',
    },
};
