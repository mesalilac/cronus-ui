import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconUser03 as IconComp } from './IconUser03';

const meta = {
    title: 'Icon/User/User03',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconUser03: Story = {
    name: 'User03'
    args: {
        size: '6rem',
    },
};
