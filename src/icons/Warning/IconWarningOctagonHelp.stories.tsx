import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconWarningOctagonHelp as IconComp } from './IconWarningOctagonHelp';

const meta = {
    title: 'Icon/Warning/OctagonHelp',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconOctagonHelp: Story = {
    name: 'OctagonHelp'
    args: {
        size: '6rem',
    },
};
