import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconSystemWindowTerminal as IconComp } from './IconSystemWindowTerminal';

const meta = {
    title: 'Icon/System/WindowTerminal',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconWindowTerminal: Story = {
    name: 'WindowTerminal'
    args: {
        size: '6rem',
    },
};
