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

export const CircleCheck: Story = {
    args: {
        size: '6rem',
    },
};
