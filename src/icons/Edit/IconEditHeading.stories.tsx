import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditHeading as IconComp } from './IconEditHeading';

const meta = {
    title: 'Icon/Edit/Heading',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const Heading: Story = {
    args: {
        size: '6rem',
    },
};
