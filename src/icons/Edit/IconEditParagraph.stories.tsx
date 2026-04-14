import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditParagraph as IconComp } from './IconEditParagraph';

const meta = {
    title: 'Icon/Edit/Paragraph',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconParagraph: Story = {
    name: 'Paragraph',
    args: {
        size: '6rem',
    },
};
