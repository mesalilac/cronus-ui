import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconWarningTriangleCheck as IconComp } from './IconWarningTriangleCheck';

const meta = {
    title: 'Icon/Warning/TriangleCheck',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconTriangleCheck: Story = {
    name: 'TriangleCheck',
    args: {
        size: '6rem',
    },
};
