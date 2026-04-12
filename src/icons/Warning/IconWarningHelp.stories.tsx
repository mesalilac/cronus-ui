import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconWarningHelp as IconComp } from './IconWarningHelp';

const meta = {
    title: 'Icon/Warning/Help',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const Help: Story = {
    args: {
        size: '6rem',
    },
};
