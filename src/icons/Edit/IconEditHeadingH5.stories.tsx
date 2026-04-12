import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditHeadingH5 as IconComp } from './IconEditHeadingH5';

const meta = {
    title: 'Icon/Edit/HeadingH5',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const HeadingH5: Story = {
    args: {
        size: '6rem',
    },
};
