import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditCombineCells } from './IconEditCombineCells';

const meta = {
    title: 'Icon/Edit/CombineCells',
    component: IconEditCombineCells,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconEditCombineCells>;

export default meta;
type Story = StoryObj<typeof IconEditCombineCells>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
