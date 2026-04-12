import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconWarningOctagonCheck } from './IconWarningOctagonCheck';

const meta = {
    title: 'Icon/Warning/OctagonCheck',
    component: IconWarningOctagonCheck,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconWarningOctagonCheck>;

export default meta;
type Story = StoryObj<typeof IconWarningOctagonCheck>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
