import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditSingleQuotesL as IconComp } from './IconEditSingleQuotesL';

const meta = {
    title: 'Icon/Edit/SingleQuotesL',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconSingleQuotesL: Story = {
    name: 'SingleQuotesL',
    args: {
        size: '6rem',
    },
};
