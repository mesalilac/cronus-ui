import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconWarningCircleHelp as IconComp } from './IconWarningCircleHelp';

const meta = {
    title: 'Icon/Warning/CircleHelp',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const CircleHelp: Story = {
    args: {
        size: '6rem',
    },
};
