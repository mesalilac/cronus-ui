import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconNavigationHouseCheck } from './IconNavigationHouseCheck';

const meta = {
    title: 'Icon/Navigation/HouseCheck',
    component: IconNavigationHouseCheck,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconNavigationHouseCheck>;

export default meta;
type Story = StoryObj<typeof IconNavigationHouseCheck>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
