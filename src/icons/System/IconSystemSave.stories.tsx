import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconSystemSave as IconComp } from './IconSystemSave';

const meta = {
    title: 'Icon/System/Save',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconSave: Story = {
    name: 'Save'
    args: {
        size: '6rem',
    },
};
