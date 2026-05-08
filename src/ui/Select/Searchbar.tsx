import { Show } from 'solid-js';

import { IconEditAddPlus } from '~/icons';
import { Button } from '~/ui/Button';
import { Input } from '~/ui/Input';
import { cn } from '~/utils';

export type SelectSearchbarProps = {
    query: string;
    setQuery: (query: string) => void;
    onCreateNewOption?: (value: string) => void;
    canCreateFromQuery?: (value: string) => boolean;
    class?: string;
};

export const Searchbar = (props: SelectSearchbarProps) => {
    const canCreateFromQuery = props.canCreateFromQuery ?? (() => true);

    const onCreate = () => {
        const query = props.query.trim();

        if (!query) return;

        props.setQuery('');
        props.onCreateNewOption?.(query);
    };

    return (
        <div class='flex flex-1 items-center gap-1'>
            <Input
                class={cn('px-2 py-1', props.class)}
                onInput={props.setQuery}
                type='search'
                value={props.query}
            />
            <Show
                when={
                    props.query.trim() && props.onCreateNewOption !== undefined
                }
            >
                <Button
                    appearance='primary'
                    class='px-2 py-1'
                    disabled={!canCreateFromQuery(props.query)}
                    onClick={onCreate}
                    title='Create new option'
                >
                    <IconEditAddPlus />
                </Button>
            </Show>
        </div>
    );
};
