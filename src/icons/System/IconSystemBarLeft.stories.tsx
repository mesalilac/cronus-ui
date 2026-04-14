import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconSystemBarLeft as IconComp } from './IconSystemBarLeft';

const meta = {
    title: 'Icon/System/BarLeft',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconBarLeft: Story = {
    name: 'BarLeft'
    args: {
        size: '6rem',
    },
};
