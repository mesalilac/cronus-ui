import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowSubDownLeft as IconComp } from './IconArrowSubDownLeft';

const meta = {
    title: 'Icon/Arrow/SubDownLeft',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconSubDownLeft: Story = {
    name: 'SubDownLeft',
    args: {
        size: '6rem',
    },
};
