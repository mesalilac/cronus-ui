import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconWarningCircleHelp } from './IconWarningCircleHelp';

const meta = {
    title: 'Icon/Warning/CircleHelp',
    component: IconWarningCircleHelp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconWarningCircleHelp>;

export default meta;
type Story = StoryObj<typeof IconWarningCircleHelp>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
