import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconNavigationHouseAdd as IconComp } from './IconNavigationHouseAdd';

const meta = {
    title: 'Icon/Navigation/HouseAdd',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const HouseAdd: Story = {
    args: {
        size: '6rem',
    },
};
