import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditPaperclipAttachmentHorizontal } from './IconEditPaperclipAttachmentHorizontal';

const meta = {
    title: 'Icon/Edit/PaperclipAttachmentHorizontal',
    component: IconEditPaperclipAttachmentHorizontal,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconEditPaperclipAttachmentHorizontal>;

export default meta;
type Story = StoryObj<typeof IconEditPaperclipAttachmentHorizontal>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
