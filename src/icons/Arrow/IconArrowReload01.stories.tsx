import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowReload01 } from './IconArrowReload01';

const meta = {
    title: 'Icon/Arrow/Reload01',
    component: IconArrowReload01,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconArrowReload01>;

export default meta;
type Story = StoryObj<typeof IconArrowReload01>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
