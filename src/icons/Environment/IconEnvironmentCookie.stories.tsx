import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEnvironmentCookie as IconComp } from './IconEnvironmentCookie';

const meta = {
    title: 'Icon/Environment/Cookie',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const Cookie: Story = {
    args: {
        size: '6rem',
    },
};
