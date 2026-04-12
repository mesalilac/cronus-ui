import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceOption as IconComp } from './IconInterfaceOption';

const meta = {
    title: 'Icon/Interface/Option',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const Option: Story = {
    args: {
        size: '6rem',
    },
};
