import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconWarningWavyCheck as IconComp } from './IconWarningWavyCheck';

const meta = {
    title: 'Icon/Warning/WavyCheck',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const WavyCheck: Story = {
    args: {
        size: '6rem',
    },
};
