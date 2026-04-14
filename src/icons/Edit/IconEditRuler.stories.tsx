import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditRuler as IconComp } from './IconEditRuler';

const meta = {
    title: 'Icon/Edit/Ruler',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconRuler: Story = {
    name: 'Ruler',
    args: {
        size: '6rem',
    },
};
