import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceTag as IconComp } from './IconInterfaceTag';

const meta = {
    title: 'Icon/Interface/Tag',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconTag: Story = {
    name: 'Tag',
    args: {
        size: '6rem',
    },
};
