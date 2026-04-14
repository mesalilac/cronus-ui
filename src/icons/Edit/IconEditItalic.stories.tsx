import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditItalic as IconComp } from './IconEditItalic';

const meta = {
    title: 'Icon/Edit/Italic',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconItalic: Story = {
    name: 'Italic',
    args: {
        size: '6rem',
    },
};
