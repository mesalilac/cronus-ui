import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconWarningWavyHelp as IconComp } from './IconWarningWavyHelp';

const meta = {
    title: 'Icon/Warning/WavyHelp',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconWavyHelp: Story = {
    name: 'WavyHelp',
    args: {
        size: '6rem',
    },
};
