import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceMagnifyingGlassPlus } from './IconInterfaceMagnifyingGlassPlus';

const meta = {
    title: 'Icon/Interface/MagnifyingGlassPlus',
    component: IconInterfaceMagnifyingGlassPlus,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconInterfaceMagnifyingGlassPlus>;

export default meta;
type Story = StoryObj<typeof IconInterfaceMagnifyingGlassPlus>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
