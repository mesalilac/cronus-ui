import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconMediaSkipBack as IconComp } from './IconMediaSkipBack';

const meta = {
    title: 'Icon/Media/SkipBack',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconSkipBack: Story = {
    name: 'SkipBack',
    args: {
        size: '6rem',
    },
};
