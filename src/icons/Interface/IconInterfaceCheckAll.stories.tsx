import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceCheckAll as IconComp } from './IconInterfaceCheckAll';

const meta = {
    title: 'Icon/Interface/CheckAll',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconCheckAll: Story = {
    name: 'CheckAll'
    args: {
        size: '6rem',
    },
};
