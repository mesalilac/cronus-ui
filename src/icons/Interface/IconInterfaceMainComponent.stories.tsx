import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceMainComponent } from './IconInterfaceMainComponent';

const meta = {
    title: 'Icon/Interface/MainComponent',
    component: IconInterfaceMainComponent,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconInterfaceMainComponent>;

export default meta;
type Story = StoryObj<typeof IconInterfaceMainComponent>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
