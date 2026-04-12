import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconNavigationHouse03 } from './IconNavigationHouse03';

const meta = {
    title: 'Icon/Navigation/House03',
    component: IconNavigationHouse03,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconNavigationHouse03>;

export default meta;
type Story = StoryObj<typeof IconNavigationHouse03>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
