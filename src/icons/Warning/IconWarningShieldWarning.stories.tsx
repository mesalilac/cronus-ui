import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconWarningShieldWarning } from './IconWarningShieldWarning';

const meta = {
    title: 'Icon/Warning/ShieldWarning',
    component: IconWarningShieldWarning,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconWarningShieldWarning>;

export default meta;
type Story = StoryObj<typeof IconWarningShieldWarning>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
