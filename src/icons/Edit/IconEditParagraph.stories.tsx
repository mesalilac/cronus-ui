import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditParagraph } from './IconEditParagraph';

const meta = {
    title: 'Icon/Edit/Paragraph',
    component: IconEditParagraph,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconEditParagraph>;

export default meta;
type Story = StoryObj<typeof IconEditParagraph>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
