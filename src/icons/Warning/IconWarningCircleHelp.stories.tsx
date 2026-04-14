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

export const IconCircleHelp: Story = {
    name: 'CircleHelp'
    args: {
        size: '6rem',
    },
};
