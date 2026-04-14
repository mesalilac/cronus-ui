import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditSingleQuotesR as IconComp } from './IconEditSingleQuotesR';

const meta = {
    title: 'Icon/Edit/SingleQuotesR',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconSingleQuotesR: Story = {
    name: 'SingleQuotesR',
    args: {
        size: '6rem',
    },
};
