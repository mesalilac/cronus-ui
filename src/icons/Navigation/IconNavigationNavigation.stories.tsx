import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconNavigationNavigation as IconComp } from './IconNavigationNavigation';

const meta = {
    title: 'Icon/Navigation/Navigation',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconNavigation: Story = {
    name: 'Navigation'
    args: {
        size: '6rem',
    },
};
