import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconMenuDuoMd } from './IconMenuDuoMd';

const meta = {
    title: 'Icon/Menu/DuoMd',
    component: IconMenuDuoMd,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconMenuDuoMd>;

export default meta;
type Story = StoryObj<typeof IconMenuDuoMd>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
