import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconWarningShieldCheck as IconComp } from './IconWarningShieldCheck';

const meta = {
    title: 'Icon/Warning/ShieldCheck',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const ShieldCheck: Story = {
    args: {
        size: '6rem',
    },
};
