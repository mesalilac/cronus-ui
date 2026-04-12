import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceLineS as IconComp } from './IconInterfaceLineS';

const meta = {
    title: 'Icon/Interface/LineS',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const LineS: Story = {
    args: {
        size: '6rem',
    },
};
