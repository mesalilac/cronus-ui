import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconWarningHelp } from './IconWarningHelp';

const meta = {
    title: 'Icon/Warning/Help',
    component: IconWarningHelp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconWarningHelp>;

export default meta;
type Story = StoryObj<typeof IconWarningHelp>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
