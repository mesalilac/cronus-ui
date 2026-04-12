import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconNavigationBuilding01 } from './IconNavigationBuilding01';

const meta = {
    title: 'Icon/Navigation/Building01',
    component: IconNavigationBuilding01,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconNavigationBuilding01>;

export default meta;
type Story = StoryObj<typeof IconNavigationBuilding01>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
