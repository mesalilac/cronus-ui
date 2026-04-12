import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconWarningWavyCheck } from './IconWarningWavyCheck';

const meta = {
    title: 'Icon/Warning/WavyCheck',
    component: IconWarningWavyCheck,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconWarningWavyCheck>;

export default meta;
type Story = StoryObj<typeof IconWarningWavyCheck>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
