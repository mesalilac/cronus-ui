import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditUnderline } from './IconEditUnderline';

const meta = {
    title: 'Icon/Edit/Underline',
    component: IconEditUnderline,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconEditUnderline>;

export default meta;
type Story = StoryObj<typeof IconEditUnderline>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
