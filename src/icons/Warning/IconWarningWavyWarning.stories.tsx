import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconWarningWavyWarning } from './IconWarningWavyWarning';

const meta = {
    title: 'Icon/Warning/WavyWarning',
    component: IconWarningWavyWarning,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconWarningWavyWarning>;

export default meta;
type Story = StoryObj<typeof IconWarningWavyWarning>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
