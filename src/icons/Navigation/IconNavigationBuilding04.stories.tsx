import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconNavigationBuilding04 as IconComp } from './IconNavigationBuilding04';

const meta = {
    title: 'Icon/Navigation/Building04',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const Building04: Story = {
    args: {
        size: '6rem',
    },
};
