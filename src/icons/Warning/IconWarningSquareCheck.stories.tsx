import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconWarningSquareCheck as IconComp } from './IconWarningSquareCheck';

const meta = {
    title: 'Icon/Warning/SquareCheck',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconSquareCheck: Story = {
    name: 'SquareCheck'
    args: {
        size: '6rem',
    },
};
