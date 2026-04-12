import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceTag } from './IconInterfaceTag';

const meta = {
    title: 'Icon/Interface/Tag',
    component: IconInterfaceTag,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconInterfaceTag>;

export default meta;
type Story = StoryObj<typeof IconInterfaceTag>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
