import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceDownload as IconComp } from './IconInterfaceDownload';

const meta = {
    title: 'Icon/Interface/Download',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const Download: Story = {
    args: {
        size: '6rem',
    },
};
