import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditFont } from './IconEditFont';

const meta = {
    title: 'Icon/Edit/Font',
    component: IconEditFont,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconEditFont>;

export default meta;
type Story = StoryObj<typeof IconEditFont>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
