import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconNavigationHouse01 } from './IconNavigationHouse01';

const meta = {
    title: 'Icon/Navigation/House01',
    component: IconNavigationHouse01,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconNavigationHouse01>;

export default meta;
type Story = StoryObj<typeof IconNavigationHouse01>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
