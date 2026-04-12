import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconWarningShieldCheck } from './IconWarningShieldCheck';

const meta = {
    title: 'Icon/Warning/ShieldCheck',
    component: IconWarningShieldCheck,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconWarningShieldCheck>;

export default meta;
type Story = StoryObj<typeof IconWarningShieldCheck>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
