import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconUser01 as IconComp } from './IconUser01';

const meta = {
    title: 'Icon/User/User01',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconUser01: Story = {
    name: 'User01',
    args: {
        size: '6rem',
    },
};
