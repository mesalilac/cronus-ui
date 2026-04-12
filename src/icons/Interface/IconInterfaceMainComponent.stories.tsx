import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceMainComponent as IconComp } from './IconInterfaceMainComponent';

const meta = {
    title: 'Icon/Interface/MainComponent',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const MainComponent: Story = {
    args: {
        size: '6rem',
    },
};
