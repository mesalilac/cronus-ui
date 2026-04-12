import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceStar } from './IconInterfaceStar';

const meta = {
    title: 'Icon/Interface/Star',
    component: IconInterfaceStar,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconInterfaceStar>;

export default meta;
type Story = StoryObj<typeof IconInterfaceStar>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
