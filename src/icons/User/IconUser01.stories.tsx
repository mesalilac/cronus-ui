import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconUser01 } from './IconUser01';

const meta = {
    title: 'Icon/User/01',
    component: IconUser01,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconUser01>;

export default meta;
type Story = StoryObj<typeof IconUser01>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
