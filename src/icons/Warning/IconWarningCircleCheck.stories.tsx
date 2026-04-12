import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconWarningCircleCheck } from './IconWarningCircleCheck';

const meta = {
    title: 'Icon/Warning/CircleCheck',
    component: IconWarningCircleCheck,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconWarningCircleCheck>;

export default meta;
type Story = StoryObj<typeof IconWarningCircleCheck>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
