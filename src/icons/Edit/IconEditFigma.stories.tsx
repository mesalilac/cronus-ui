import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditFigma } from './IconEditFigma';

const meta = {
    title: 'Icon/Edit/Figma',
    component: IconEditFigma,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconEditFigma>;

export default meta;
type Story = StoryObj<typeof IconEditFigma>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
