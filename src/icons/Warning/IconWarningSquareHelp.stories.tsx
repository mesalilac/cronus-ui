import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconWarningSquareHelp } from './IconWarningSquareHelp';

const meta = {
    title: 'Icon/Warning/SquareHelp',
    component: IconWarningSquareHelp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconWarningSquareHelp>;

export default meta;
type Story = StoryObj<typeof IconWarningSquareHelp>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
