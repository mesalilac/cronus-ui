import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditAddPlus as IconComp } from './IconEditAddPlus';

const meta = {
    title: 'Icon/Edit/AddPlus',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconAddPlus: Story = {
    name: 'AddPlus'
    args: {
        size: '6rem',
    },
};
