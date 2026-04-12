import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceCheckAll } from './IconInterfaceCheckAll';

const meta = {
    title: 'Icon/Interface/CheckAll',
    component: IconInterfaceCheckAll,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconInterfaceCheckAll>;

export default meta;
type Story = StoryObj<typeof IconInterfaceCheckAll>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
