import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowChevronDownDuo } from './IconArrowChevronDownDuo';

const meta = {
    title: 'Icon/Arrow/ChevronDownDuo',
    component: IconArrowChevronDownDuo,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconArrowChevronDownDuo>;

export default meta;
type Story = StoryObj<typeof IconArrowChevronDownDuo>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
