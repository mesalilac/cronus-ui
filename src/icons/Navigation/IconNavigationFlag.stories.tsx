import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconNavigationFlag } from './IconNavigationFlag';

const meta = {
    title: 'Icon/Navigation/Flag',
    component: IconNavigationFlag,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconNavigationFlag>;

export default meta;
type Story = StoryObj<typeof IconNavigationFlag>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
