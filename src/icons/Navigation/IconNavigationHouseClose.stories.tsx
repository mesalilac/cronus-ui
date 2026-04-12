import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconNavigationHouseClose } from './IconNavigationHouseClose';

const meta = {
    title: 'Icon/Navigation/HouseClose',
    component: IconNavigationHouseClose,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconNavigationHouseClose>;

export default meta;
type Story = StoryObj<typeof IconNavigationHouseClose>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
