import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconNavigationHouse02 } from './IconNavigationHouse02';

const meta = {
    title: 'Icon/Navigation/House02',
    component: IconNavigationHouse02,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconNavigationHouse02>;

export default meta;
type Story = StoryObj<typeof IconNavigationHouse02>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
