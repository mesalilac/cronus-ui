import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconUser02 as IconComp } from './IconUser02';

const meta = {
    title: 'Icon/User/User02',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconUser02: Story = {
    name: 'User02',
    args: {
        size: '6rem',
    },
};
