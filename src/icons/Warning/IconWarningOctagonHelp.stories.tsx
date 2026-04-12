import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconWarningOctagonHelp } from './IconWarningOctagonHelp';

const meta = {
    title: 'Icon/Warning/OctagonHelp',
    component: IconWarningOctagonHelp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconWarningOctagonHelp>;

export default meta;
type Story = StoryObj<typeof IconWarningOctagonHelp>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
