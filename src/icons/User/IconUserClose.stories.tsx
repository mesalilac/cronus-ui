import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconUserClose as IconComp } from './IconUserClose';

const meta = {
    title: 'Icon/User/Close',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const Close: Story = {
    args: {
        size: '6rem',
    },
};
