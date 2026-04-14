import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditText as IconComp } from './IconEditText';

const meta = {
    title: 'Icon/Edit/Text',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconText: Story = {
    name: 'Text'
    args: {
        size: '6rem',
    },
};
