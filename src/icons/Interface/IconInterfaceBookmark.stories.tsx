import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceBookmark } from './IconInterfaceBookmark';

const meta = {
    title: 'Icon/Interface/Bookmark',
    component: IconInterfaceBookmark,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconInterfaceBookmark>;

export default meta;
type Story = StoryObj<typeof IconInterfaceBookmark>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
