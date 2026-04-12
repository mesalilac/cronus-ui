import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconSystemTabletButton as IconComp } from './IconSystemTabletButton';

const meta = {
    title: 'Icon/System/TabletButton',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const TabletButton: Story = {
    args: {
        size: '6rem',
    },
};
