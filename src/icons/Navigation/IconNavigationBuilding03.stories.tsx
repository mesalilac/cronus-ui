import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconNavigationBuilding03 as IconComp } from './IconNavigationBuilding03';

const meta = {
    title: 'Icon/Navigation/Building03',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const Building03: Story = {
    args: {
        size: '6rem',
    },
};
