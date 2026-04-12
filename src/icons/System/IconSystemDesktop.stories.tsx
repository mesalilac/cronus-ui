import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconSystemDesktop } from './IconSystemDesktop';

const meta = {
    title: 'Icon/System/Desktop',
    component: IconSystemDesktop,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconSystemDesktop>;

export default meta;
type Story = StoryObj<typeof IconSystemDesktop>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
