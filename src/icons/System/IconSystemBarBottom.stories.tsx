import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconSystemBarBottom as IconComp } from './IconSystemBarBottom';

const meta = {
    title: 'Icon/System/BarBottom',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconBarBottom: Story = {
    name: 'BarBottom',
    args: {
        size: '6rem',
    },
};
