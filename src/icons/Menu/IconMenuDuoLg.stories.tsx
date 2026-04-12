import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconMenuDuoLg } from './IconMenuDuoLg';

const meta = {
    title: 'Icon/Menu/DuoLg',
    component: IconMenuDuoLg,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconMenuDuoLg>;

export default meta;
type Story = StoryObj<typeof IconMenuDuoLg>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
