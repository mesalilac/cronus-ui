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

export const User03: Story = {
    args: {
        size: '6rem',
    },
};
