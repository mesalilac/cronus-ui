import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowSubDownRight as IconComp } from './IconArrowSubDownRight';

const meta = {
    title: 'Icon/Arrow/SubDownRight',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const SubDownRight: Story = {
    args: {
        size: '6rem',
    },
};
