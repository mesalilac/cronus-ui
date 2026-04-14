import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconWarningTriangleWarning as IconComp } from './IconWarningTriangleWarning';

const meta = {
    title: 'Icon/Warning/TriangleWarning',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconTriangleWarning: Story = {
    name: 'TriangleWarning',
    args: {
        size: '6rem',
    },
};
