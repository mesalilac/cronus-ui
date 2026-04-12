import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconNavigationBuilding03 } from './IconNavigationBuilding03';

const meta = {
    title: 'Icon/Navigation/Building03',
    component: IconNavigationBuilding03,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconNavigationBuilding03>;

export default meta;
type Story = StoryObj<typeof IconNavigationBuilding03>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
