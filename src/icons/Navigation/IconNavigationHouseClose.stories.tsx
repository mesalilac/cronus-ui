import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconNavigationHouseClose as IconComp } from './IconNavigationHouseClose';

const meta = {
    title: 'Icon/Navigation/HouseClose',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconHouseClose: Story = {
    name: 'HouseClose'
    args: {
        size: '6rem',
    },
};
