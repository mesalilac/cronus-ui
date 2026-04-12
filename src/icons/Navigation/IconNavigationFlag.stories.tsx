import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconNavigationFlag as IconComp } from './IconNavigationFlag';

const meta = {
    title: 'Icon/Navigation/Flag',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const Flag: Story = {
    args: {
        size: '6rem',
    },
};
