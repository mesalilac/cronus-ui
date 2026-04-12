import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconWarningCircleWarning } from './IconWarningCircleWarning';

const meta = {
    title: 'Icon/Warning/CircleWarning',
    component: IconWarningCircleWarning,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconWarningCircleWarning>;

export default meta;
type Story = StoryObj<typeof IconWarningCircleWarning>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
