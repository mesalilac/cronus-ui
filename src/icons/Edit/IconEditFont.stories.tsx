import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditFont as IconComp } from './IconEditFont';

const meta = {
    title: 'Icon/Edit/Font',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const Font: Story = {
    args: {
        size: '6rem',
    },
};
