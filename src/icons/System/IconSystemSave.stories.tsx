import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconSystemSave } from './IconSystemSave';

const meta = {
    title: 'Icon/System/Save',
    component: IconSystemSave,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconSystemSave>;

export default meta;
type Story = StoryObj<typeof IconSystemSave>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
