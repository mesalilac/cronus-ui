import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconWarningWavyHelp } from './IconWarningWavyHelp';

const meta = {
    title: 'Icon/Warning/WavyHelp',
    component: IconWarningWavyHelp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconWarningWavyHelp>;

export default meta;
type Story = StoryObj<typeof IconWarningWavyHelp>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
