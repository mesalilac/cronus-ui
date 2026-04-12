import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowReload02 } from './IconArrowReload02';

const meta = {
    title: 'Icon/Arrow/Reload02',
    component: IconArrowReload02,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconArrowReload02>;

export default meta;
type Story = StoryObj<typeof IconArrowReload02>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
