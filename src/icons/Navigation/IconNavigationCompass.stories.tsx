import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconNavigationCompass } from './IconNavigationCompass';

const meta = {
    title: 'Icon/Navigation/Compass',
    component: IconNavigationCompass,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconNavigationCompass>;

export default meta;
type Story = StoryObj<typeof IconNavigationCompass>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
