import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconWarningShieldWarning as IconComp } from './IconWarningShieldWarning';

const meta = {
    title: 'Icon/Warning/ShieldWarning',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconShieldWarning: Story = {
    name: 'ShieldWarning',
    args: {
        size: '6rem',
    },
};
