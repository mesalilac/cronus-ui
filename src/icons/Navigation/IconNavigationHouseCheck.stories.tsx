import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconNavigationHouseCheck as IconComp } from './IconNavigationHouseCheck';

const meta = {
    title: 'Icon/Navigation/HouseCheck',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconHouseCheck: Story = {
    name: 'HouseCheck'
    args: {
        size: '6rem',
    },
};
