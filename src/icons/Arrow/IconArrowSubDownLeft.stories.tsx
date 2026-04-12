import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowSubDownLeft } from './IconArrowSubDownLeft';

const meta = {
    title: 'Icon/Arrow/SubDownLeft',
    component: IconArrowSubDownLeft,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconArrowSubDownLeft>;

export default meta;
type Story = StoryObj<typeof IconArrowSubDownLeft>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
