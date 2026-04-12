import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowChevronUpDuo } from './IconArrowChevronUpDuo';

const meta = {
    title: 'Icon/Arrow/ChevronUpDuo',
    component: IconArrowChevronUpDuo,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconArrowChevronUpDuo>;

export default meta;
type Story = StoryObj<typeof IconArrowChevronUpDuo>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
