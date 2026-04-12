import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconWarningSquareHelp as IconComp } from './IconWarningSquareHelp';

const meta = {
    title: 'Icon/Warning/SquareHelp',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const SquareHelp: Story = {
    args: {
        size: '6rem',
    },
};
