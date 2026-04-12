import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowChevronRightDuo } from './IconArrowChevronRightDuo';

const meta = {
    title: 'Icon/Arrow/ChevronRightDuo',
    component: IconArrowChevronRightDuo,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconArrowChevronRightDuo>;

export default meta;
type Story = StoryObj<typeof IconArrowChevronRightDuo>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
