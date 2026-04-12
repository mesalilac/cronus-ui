import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconUser02 } from './IconUser02';

const meta = {
    title: 'Icon/User/02',
    component: IconUser02,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconUser02>;

export default meta;
type Story = StoryObj<typeof IconUser02>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
