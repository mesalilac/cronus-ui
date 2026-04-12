import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconFileNoteEdit } from './IconFileNoteEdit';

const meta = {
    title: 'Icon/File/NoteEdit',
    component: IconFileNoteEdit,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconFileNoteEdit>;

export default meta;
type Story = StoryObj<typeof IconFileNoteEdit>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
