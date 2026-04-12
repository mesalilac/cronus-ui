import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconUser03 } from './IconUser03';

const meta = {
    title: 'Icon/User/03',
    component: IconUser03,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconUser03>;

export default meta;
type Story = StoryObj<typeof IconUser03>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
