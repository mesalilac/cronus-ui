import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconNavigationHouseRemove as IconComp } from './IconNavigationHouseRemove';

const meta = {
    title: 'Icon/Navigation/HouseRemove',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconHouseRemove: Story = {
    name: 'HouseRemove'
    args: {
        size: '6rem',
    },
};
