import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconMediaForward as IconComp } from './IconMediaForward';

const meta = {
    title: 'Icon/Media/Forward',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const Forward: Story = {
    args: {
        size: '6rem',
    },
};
