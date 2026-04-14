import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditPath as IconComp } from './IconEditPath';

const meta = {
    title: 'Icon/Edit/Path',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconPath: Story = {
    name: 'Path'
    args: {
        size: '6rem',
    },
};
