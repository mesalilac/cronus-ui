import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconNavigation } from './IconNavigation';

const meta = {
    title: 'Icon/Navigation',
    component: IconNavigation,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconNavigation>;

export default meta;
type Story = StoryObj<typeof IconNavigation>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
