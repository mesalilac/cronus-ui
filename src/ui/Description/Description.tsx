import { type ComponentProps, splitProps } from 'solid-js';

import { Text } from '~/ui/Text';
import { cn } from '~/utils';

export const Description = (rawProps: ComponentProps<typeof Text>) => {
    const [local, others] = splitProps(rawProps, ['class']);

    return (
        <Text class={cn('text-sm', local.class)} variant='muted' {...others} />
    );
};
