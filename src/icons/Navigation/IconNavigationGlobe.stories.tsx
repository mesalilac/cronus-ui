import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconNavigationGlobe as IconComp } from './IconNavigationGlobe';

const meta = {
    title: 'Icon/Navigation/Globe',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconGlobe: Story = {
    name: 'Globe'
    args: {
        size: '6rem',
    },
};
