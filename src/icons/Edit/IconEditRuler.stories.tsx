import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditRuler } from './IconEditRuler';

const meta = {
    title: 'Icon/Edit/Ruler',
    component: IconEditRuler,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconEditRuler>;

export default meta;
type Story = StoryObj<typeof IconEditRuler>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
