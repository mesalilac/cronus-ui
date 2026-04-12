import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditPaperclipAttachmentTilt } from './IconEditPaperclipAttachmentTilt';

const meta = {
    title: 'Icon/Edit/PaperclipAttachmentTilt',
    component: IconEditPaperclipAttachmentTilt,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconEditPaperclipAttachmentTilt>;

export default meta;
type Story = StoryObj<typeof IconEditPaperclipAttachmentTilt>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
