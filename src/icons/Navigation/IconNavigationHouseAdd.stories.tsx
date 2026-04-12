import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconNavigationHouseAdd } from './IconNavigationHouseAdd';

const meta = {
    title: 'Icon/Navigation/HouseAdd',
    component: IconNavigationHouseAdd,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconNavigationHouseAdd>;

export default meta;
type Story = StoryObj<typeof IconNavigationHouseAdd>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
