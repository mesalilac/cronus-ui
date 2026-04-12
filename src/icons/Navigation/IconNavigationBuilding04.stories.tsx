import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconNavigationBuilding04 } from './IconNavigationBuilding04';

const meta = {
    title: 'Icon/Navigation/Building04',
    component: IconNavigationBuilding04,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconNavigationBuilding04>;

export default meta;
type Story = StoryObj<typeof IconNavigationBuilding04>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
