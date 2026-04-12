import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconWarningOctagonCheck as IconComp } from './IconWarningOctagonCheck';

const meta = {
    title: 'Icon/Warning/OctagonCheck',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const OctagonCheck: Story = {
    args: {
        size: '6rem',
    },
};
