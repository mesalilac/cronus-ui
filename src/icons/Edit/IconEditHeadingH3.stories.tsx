import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditHeadingH3 as IconComp } from './IconEditHeadingH3';

const meta = {
    title: 'Icon/Edit/HeadingH3',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconHeadingH3: Story = {
    name: 'HeadingH3'
    args: {
        size: '6rem',
    },
};
