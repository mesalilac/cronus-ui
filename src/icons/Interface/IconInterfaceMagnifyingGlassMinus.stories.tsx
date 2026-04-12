import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceMagnifyingGlassMinus } from './IconInterfaceMagnifyingGlassMinus';

const meta = {
    title: 'Icon/Interface/MagnifyingGlassMinus',
    component: IconInterfaceMagnifyingGlassMinus,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconInterfaceMagnifyingGlassMinus>;

export default meta;
type Story = StoryObj<typeof IconInterfaceMagnifyingGlassMinus>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
