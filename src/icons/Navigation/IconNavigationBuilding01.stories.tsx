import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconNavigationBuilding01 as IconComp } from './IconNavigationBuilding01';

const meta = {
    title: 'Icon/Navigation/Building01',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconBuilding01: Story = {
    name: 'Building01'
    args: {
        size: '6rem',
    },
};
