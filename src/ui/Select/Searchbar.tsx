import { Show } from 'solid-js';

import { IconEditAddPlus } from '~/icons';
import { Button } from '~/ui/Button';
import { Input } from '~/ui/Input';

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
        <Input
            class={props.class}
            onInput={props.setQuery}
            type='search'
            value={props.query}
        >
            <Show
                when={
                    props.query.trim() && props.onCreateNewOption !== undefined
                }
            >
                <Button
                    appearance='primary'
                    disabled={!canCreateFromQuery(props.query)}
                    onClick={onCreate}
                    variant='soft'
                >
                    <IconEditAddPlus />
                </Button>
            </Show>
        </Input>
    );
};
