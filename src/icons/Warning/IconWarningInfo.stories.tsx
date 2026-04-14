import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconWarningInfo as IconComp } from './IconWarningInfo';

const meta = {
    title: 'Icon/Warning/Info',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconInfo: Story = {
    name: 'Info'
    args: {
        size: '6rem',
    },
};
