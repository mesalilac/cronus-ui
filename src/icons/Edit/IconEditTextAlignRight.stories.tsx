import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditTextAlignRight as IconComp } from './IconEditTextAlignRight';

const meta = {
    title: 'Icon/Edit/TextAlignRight',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconTextAlignRight: Story = {
    name: 'TextAlignRight',
    args: {
        size: '6rem',
    },
};
