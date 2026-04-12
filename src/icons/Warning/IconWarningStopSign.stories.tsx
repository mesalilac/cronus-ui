import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconWarningStopSign as IconComp } from './IconWarningStopSign';

const meta = {
    title: 'Icon/Warning/StopSign',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const StopSign: Story = {
    args: {
        size: '6rem',
    },
};
