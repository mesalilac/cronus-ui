import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconMenuAlt04 as IconComp } from './IconMenuAlt04';

const meta = {
    title: 'Icon/Menu/Alt04',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const Alt04: Story = {
    args: {
        size: '6rem',
    },
};
