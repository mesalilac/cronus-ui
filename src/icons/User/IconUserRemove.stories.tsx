import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconUserRemove } from './IconUserRemove';

const meta = {
    title: 'Icon/User/Remove',
    component: IconUserRemove,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconUserRemove>;

export default meta;
type Story = StoryObj<typeof IconUserRemove>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
