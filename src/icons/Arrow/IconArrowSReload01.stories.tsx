import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowSReload01 } from './IconArrowSReload01';

const meta = {
    title: 'Icon/Arrow/SReload01',
    component: IconArrowSReload01,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconArrowSReload01>;

export default meta;
type Story = StoryObj<typeof IconArrowSReload01>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
