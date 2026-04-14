import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconWarningSquareWarning as IconComp } from './IconWarningSquareWarning';

const meta = {
    title: 'Icon/Warning/SquareWarning',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconSquareWarning: Story = {
    name: 'SquareWarning',
    args: {
        size: '6rem',
    },
};
