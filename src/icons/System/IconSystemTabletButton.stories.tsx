import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconSystemTabletButton } from './IconSystemTabletButton';

const meta = {
    title: 'Icon/System/TabletButton',
    component: IconSystemTabletButton,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconSystemTabletButton>;

export default meta;
type Story = StoryObj<typeof IconSystemTabletButton>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
