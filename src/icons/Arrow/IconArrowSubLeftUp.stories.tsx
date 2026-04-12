import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowSubLeftUp as IconComp } from './IconArrowSubLeftUp';

const meta = {
    title: 'Icon/Arrow/SubLeftUp',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const SubLeftUp: Story = {
    args: {
        size: '6rem',
    },
};
