import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowReload02 as IconComp } from './IconArrowReload02';

const meta = {
    title: 'Icon/Arrow/Reload02',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconReload02: Story = {
    name: 'Reload02'
    args: {
        size: '6rem',
    },
};
