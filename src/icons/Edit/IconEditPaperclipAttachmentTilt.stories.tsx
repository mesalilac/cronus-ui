import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditPaperclipAttachmentTilt as IconComp } from './IconEditPaperclipAttachmentTilt';

const meta = {
    title: 'Icon/Edit/PaperclipAttachmentTilt',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const PaperclipAttachmentTilt: Story = {
    args: {
        size: '6rem',
    },
};
