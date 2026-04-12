import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditPaperclipAttachmentHorizontal as IconComp } from './IconEditPaperclipAttachmentHorizontal';

const meta = {
    title: 'Icon/Edit/PaperclipAttachmentHorizontal',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const PaperclipAttachmentHorizontal: Story = {
    args: {
        size: '6rem',
    },
};
