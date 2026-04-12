import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconSystemWindowClose as IconComp } from './IconSystemWindowClose';

const meta = {
    title: 'Icon/System/WindowClose',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const WindowClose: Story = {
    args: {
        size: '6rem',
    },
};
