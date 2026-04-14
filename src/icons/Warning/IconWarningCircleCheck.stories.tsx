import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconWarningCircleCheck as IconComp } from './IconWarningCircleCheck';

const meta = {
    title: 'Icon/Warning/CircleCheck',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconCircleCheck: Story = {
    name: 'CircleCheck',
    args: {
        size: '6rem',
    },
};
