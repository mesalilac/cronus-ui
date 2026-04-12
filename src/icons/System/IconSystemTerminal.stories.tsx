import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconSystemTerminal } from './IconSystemTerminal';

const meta = {
    title: 'Icon/System/Terminal',
    component: IconSystemTerminal,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconSystemTerminal>;

export default meta;
type Story = StoryObj<typeof IconSystemTerminal>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
