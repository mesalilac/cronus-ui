import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconSystemTerminal as IconComp } from './IconSystemTerminal';

const meta = {
    title: 'Icon/System/Terminal',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const Terminal: Story = {
    args: {
        size: '6rem',
    },
};
