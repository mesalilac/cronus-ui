import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconNavigationHouse03 as IconComp } from './IconNavigationHouse03';

const meta = {
    title: 'Icon/Navigation/House03',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconHouse03: Story = {
    name: 'House03'
    args: {
        size: '6rem',
    },
};
