import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconNavigationBuilding02 as IconComp } from './IconNavigationBuilding02';

const meta = {
    title: 'Icon/Navigation/Building02',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const Building02: Story = {
    args: {
        size: '6rem',
    },
};
