import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconWarningWavyWarning as IconComp } from './IconWarningWavyWarning';

const meta = {
    title: 'Icon/Warning/WavyWarning',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconWavyWarning: Story = {
    name: 'WavyWarning',
    args: {
        size: '6rem',
    },
};
