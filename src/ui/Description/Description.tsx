import { splitProps } from 'solid-js';

import { Text, type TextProps } from '~/ui/Text';
import { cn } from '~/utils';

export const Description = (rawProps: TextProps) => {
    const [local, others] = splitProps(rawProps, ['class']);

    return (
        <Text class={cn('text-xs', local.class)} variant='muted' {...others} />
    );
};
