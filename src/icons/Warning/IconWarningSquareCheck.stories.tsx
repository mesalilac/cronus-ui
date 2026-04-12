import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconWarningSquareCheck } from './IconWarningSquareCheck';

const meta = {
    title: 'Icon/Warning/SquareCheck',
    component: IconWarningSquareCheck,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconWarningSquareCheck>;

export default meta;
type Story = StoryObj<typeof IconWarningSquareCheck>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
