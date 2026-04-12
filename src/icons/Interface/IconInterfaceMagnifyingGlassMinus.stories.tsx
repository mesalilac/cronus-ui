import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceMagnifyingGlassMinus as IconComp } from './IconInterfaceMagnifyingGlassMinus';

const meta = {
    title: 'Icon/Interface/MagnifyingGlassMinus',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const MagnifyingGlassMinus: Story = {
    args: {
        size: '6rem',
    },
};
