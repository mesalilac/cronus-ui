import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditHeadingH2 as IconComp } from './IconEditHeadingH2';

const meta = {
    title: 'Icon/Edit/HeadingH2',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconHeadingH2: Story = {
    name: 'HeadingH2',
    args: {
        size: '6rem',
    },
};
