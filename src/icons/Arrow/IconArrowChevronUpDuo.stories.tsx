import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowChevronUpDuo as IconComp } from './IconArrowChevronUpDuo';

const meta = {
    title: 'Icon/Arrow/ChevronUpDuo',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const ChevronUpDuo: Story = {
    args: {
        size: '6rem',
    },
};
