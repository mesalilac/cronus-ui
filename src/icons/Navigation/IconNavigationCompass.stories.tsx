import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconNavigationCompass as IconComp } from './IconNavigationCompass';

const meta = {
    title: 'Icon/Navigation/Compass',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const Compass: Story = {
    args: {
        size: '6rem',
    },
};
