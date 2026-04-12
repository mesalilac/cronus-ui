import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconNavigationHouse02 as IconComp } from './IconNavigationHouse02';

const meta = {
    title: 'Icon/Navigation/House02',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const House02: Story = {
    args: {
        size: '6rem',
    },
};
