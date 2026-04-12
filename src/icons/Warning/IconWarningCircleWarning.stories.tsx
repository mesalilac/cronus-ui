import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconWarningCircleWarning as IconComp } from './IconWarningCircleWarning';

const meta = {
    title: 'Icon/Warning/CircleWarning',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const CircleWarning: Story = {
    args: {
        size: '6rem',
    },
};
