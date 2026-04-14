import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconFileClose as IconComp } from './IconFileClose';

const meta = {
    title: 'Icon/File/Close',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconClose: Story = {
    name: 'Close',
    args: {
        size: '6rem',
    },
};
