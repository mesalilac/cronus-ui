import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowReload01 as IconComp } from './IconArrowReload01';

const meta = {
    title: 'Icon/Arrow/Reload01',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const Reload01: Story = {
    args: {
        size: '6rem',
    },
};
