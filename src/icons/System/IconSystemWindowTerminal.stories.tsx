import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconSystemWindowTerminal } from './IconSystemWindowTerminal';

const meta = {
    title: 'Icon/System/WindowTerminal',
    component: IconSystemWindowTerminal,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconSystemWindowTerminal>;

export default meta;
type Story = StoryObj<typeof IconSystemWindowTerminal>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
