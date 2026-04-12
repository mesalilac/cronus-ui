import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconFileNoteSearch } from './IconFileNoteSearch';

const meta = {
    title: 'Icon/File/NoteSearch',
    component: IconFileNoteSearch,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconFileNoteSearch>;

export default meta;
type Story = StoryObj<typeof IconFileNoteSearch>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
