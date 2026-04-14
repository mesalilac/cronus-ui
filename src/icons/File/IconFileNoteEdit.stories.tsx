import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconFileNoteEdit as IconComp } from './IconFileNoteEdit';

const meta = {
    title: 'Icon/File/NoteEdit',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconNoteEdit: Story = {
    name: 'NoteEdit',
    args: {
        size: '6rem',
    },
};
