import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconUserClose } from './IconUserClose';

const meta = {
    title: 'Icon/User/Close',
    component: IconUserClose,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconUserClose>;

export default meta;
type Story = StoryObj<typeof IconUserClose>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
