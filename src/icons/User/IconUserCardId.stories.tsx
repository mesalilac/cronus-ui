import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconUserCardId } from './IconUserCardId';

const meta = {
    title: 'Icon/User/CardId',
    component: IconUserCardId,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconUserCardId>;

export default meta;
type Story = StoryObj<typeof IconUserCardId>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
