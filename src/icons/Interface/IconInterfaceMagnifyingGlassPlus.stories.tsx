import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceMagnifyingGlassPlus as IconComp } from './IconInterfaceMagnifyingGlassPlus';

const meta = {
    title: 'Icon/Interface/MagnifyingGlassPlus',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const MagnifyingGlassPlus: Story = {
    args: {
        size: '6rem',
    },
};
