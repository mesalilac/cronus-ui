import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconNavigationBuilding02 } from './IconNavigationBuilding02';

const meta = {
    title: 'Icon/Navigation/Building02',
    component: IconNavigationBuilding02,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconNavigationBuilding02>;

export default meta;
type Story = StoryObj<typeof IconNavigationBuilding02>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
