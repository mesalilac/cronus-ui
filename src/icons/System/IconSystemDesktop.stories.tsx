import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconSystemDesktop as IconComp } from './IconSystemDesktop';

const meta = {
    title: 'Icon/System/Desktop',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconDesktop: Story = {
    name: 'Desktop'
    args: {
        size: '6rem',
    },
};
