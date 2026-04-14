import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconFileNoteSearch as IconComp } from './IconFileNoteSearch';

const meta = {
    title: 'Icon/File/NoteSearch',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconNoteSearch: Story = {
    name: 'NoteSearch',
    args: {
        size: '6rem',
    },
};
