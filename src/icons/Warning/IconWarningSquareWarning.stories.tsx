import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconWarningSquareWarning } from './IconWarningSquareWarning';

const meta = {
    title: 'Icon/Warning/SquareWarning',
    component: IconWarningSquareWarning,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconWarningSquareWarning>;

export default meta;
type Story = StoryObj<typeof IconWarningSquareWarning>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
