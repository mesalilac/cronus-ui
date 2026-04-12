import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconWarningOctagonWarning as IconComp } from './IconWarningOctagonWarning';

const meta = {
    title: 'Icon/Warning/OctagonWarning',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const OctagonWarning: Story = {
    args: {
        size: '6rem',
    },
};
