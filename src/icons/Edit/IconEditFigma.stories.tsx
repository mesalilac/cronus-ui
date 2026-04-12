import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditFigma as IconComp } from './IconEditFigma';

const meta = {
    title: 'Icon/Edit/Figma',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const Figma: Story = {
    args: {
        size: '6rem',
    },
};
