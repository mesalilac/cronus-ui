import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowChevronDownDuo as IconComp } from './IconArrowChevronDownDuo';

const meta = {
    title: 'Icon/Arrow/ChevronDownDuo',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const ChevronDownDuo: Story = {
    args: {
        size: '6rem',
    },
};
