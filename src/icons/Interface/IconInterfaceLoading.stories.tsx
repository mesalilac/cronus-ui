import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceLoading as IconComp } from './IconInterfaceLoading';

const meta = {
    title: 'Icon/Interface/Loading',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const Loading: Story = {
    args: {
        size: '6rem',
    },
};
