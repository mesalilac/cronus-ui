import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditHeadingH1 as IconComp } from './IconEditHeadingH1';

const meta = {
    title: 'Icon/Edit/HeadingH1',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconHeadingH1: Story = {
    name: 'HeadingH1',
    args: {
        size: '6rem',
    },
};
