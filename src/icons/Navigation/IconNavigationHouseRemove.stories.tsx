import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconNavigationHouseRemove } from './IconNavigationHouseRemove';

const meta = {
    title: 'Icon/Navigation/HouseRemove',
    component: IconNavigationHouseRemove,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconNavigationHouseRemove>;

export default meta;
type Story = StoryObj<typeof IconNavigationHouseRemove>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
