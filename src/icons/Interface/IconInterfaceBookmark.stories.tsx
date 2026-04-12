import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceBookmark as IconComp } from './IconInterfaceBookmark';

const meta = {
    title: 'Icon/Interface/Bookmark',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const Bookmark: Story = {
    args: {
        size: '6rem',
    },
};
