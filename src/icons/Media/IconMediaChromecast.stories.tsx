import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconMediaChromecast } from './IconMediaChromecast';

const meta = {
    title: 'Icon/Media/Chromecast',
    component: IconMediaChromecast,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconMediaChromecast>;

export default meta;
type Story = StoryObj<typeof IconMediaChromecast>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
