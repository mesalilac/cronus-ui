import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconWarningOctagonWarning } from './IconWarningOctagonWarning';

const meta = {
    title: 'Icon/Warning/OctagonWarning',
    component: IconWarningOctagonWarning,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconWarningOctagonWarning>;

export default meta;
type Story = StoryObj<typeof IconWarningOctagonWarning>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
