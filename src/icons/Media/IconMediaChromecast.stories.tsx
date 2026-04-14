import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconMediaChromecast as IconComp } from './IconMediaChromecast';

const meta = {
    title: 'Icon/Media/Chromecast',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconChromecast: Story = {
    name: 'Chromecast'
    args: {
        size: '6rem',
    },
};
