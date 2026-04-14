import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditTable as IconComp } from './IconEditTable';

const meta = {
    title: 'Icon/Edit/Table',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconTable: Story = {
    name: 'Table'
    args: {
        size: '6rem',
    },
};
