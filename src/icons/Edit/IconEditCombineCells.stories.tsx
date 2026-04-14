import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditCombineCells as IconComp } from './IconEditCombineCells';

const meta = {
    title: 'Icon/Edit/CombineCells',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconCombineCells: Story = {
    name: 'CombineCells'
    args: {
        size: '6rem',
    },
};
