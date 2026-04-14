import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditHeadingH4 as IconComp } from './IconEditHeadingH4';

const meta = {
    title: 'Icon/Edit/HeadingH4',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconHeadingH4: Story = {
    name: 'HeadingH4',
    args: {
        size: '6rem',
    },
};
