import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconWarningStopSign } from './IconWarningStopSign';

const meta = {
    title: 'Icon/Warning/StopSign',
    component: IconWarningStopSign,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconWarningStopSign>;

export default meta;
type Story = StoryObj<typeof IconWarningStopSign>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
