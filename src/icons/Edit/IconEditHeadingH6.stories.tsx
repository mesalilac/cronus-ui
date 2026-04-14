import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditHeadingH6 as IconComp } from './IconEditHeadingH6';

const meta = {
    title: 'Icon/Edit/HeadingH6',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconHeadingH6: Story = {
    name: 'HeadingH6',
    args: {
        size: '6rem',
    },
};
