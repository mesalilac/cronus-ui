import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceStar as IconComp } from './IconInterfaceStar';

const meta = {
    title: 'Icon/Interface/Star',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const Star: Story = {
    args: {
        size: '6rem',
    },
};
