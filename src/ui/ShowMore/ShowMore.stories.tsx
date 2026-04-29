import { Show } from 'solid-js';
import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { Button } from '~/ui/Button';

import { ShowMore } from './ShowMore';

type StoryComponent = typeof ShowMore;

const meta = {
    title: 'Ui/ShowMore',
    component: ShowMore,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<StoryComponent>;

export default meta;
type Story = StoryObj<StoryComponent>;

const LoremIpsum = () => {
    return (
        <>
            Amet adipisicing excepteur id fugiat aliquip ea dolore velit. Culpa
            sunt ad irure sint officia aliqua labore id deserunt ullamco. Minim
            irure nostrud sunt do culpa excepteur nulla nulla cupidatat. Dolor
            adipisicing tempor dolore nisi fugiat. Nostrud Lorem consequat in
            dolore. Cillum qui eu sint ipsum. Magna commodo nostrud culpa dolor
            Lorem aliqua culpa. Fugiat do nulla pariatur consequat veniam
            adipisicing mollit laborum sunt. Ipsum id ullamco tempor ad cillum
            exercitation tempor in mollit pariatur laborum mollit. Aute fugiat
            adipisicing consequat tempor exercitation ex sunt et cillum aute
            consectetur. Proident nulla ut do proident eiusmod dolore dolore.
            Esse dolore magna consequat sint tempor ipsum irure quis esse et
            tempor ut sint ullamco. Occaecat mollit sit veniam ipsum nulla non
            adipisicing enim dolor labore fugiat. Officia ullamco ad sit magna
            non est nisi id sint id exercitation reprehenderit reprehenderit.
            Excepteur est tempor laborum nostrud qui culpa qui dolore voluptate
            velit duis. Dolor incididunt magna dolor pariatur. Nostrud minim
            consequat officia tempor aliquip cillum officia. In velit officia et
            aute ex pariatur velit duis ipsum. Cupidatat consectetur minim
            commodo dolor mollit reprehenderit laboris. Occaecat eu ullamco
            ullamco magna. Deserunt aliquip nulla in nisi. Occaecat minim
            incididunt aliquip minim id eu adipisicing consectetur veniam quis.
            Eu cillum eu laborum irure eiusmod amet officia Lorem elit laboris
            nostrud amet. Quis labore do do amet esse voluptate. Nisi culpa
            ullamco nostrud pariatur excepteur adipisicing voluptate
            reprehenderit officia. Aliqua anim eu officia culpa exercitation
            dolore reprehenderit irure est occaecat minim laboris reprehenderit.
        </>
    );
};

export const Default: Story = {
    render: () => {
        return (
            <div class='flex size-96 flex-col gap-2 overflow-y-auto p-2'>
                <h1 class='font-semibold text-xl'>Message</h1>
                <ShowMore>
                    <ShowMore.Content class='max-h-32 text-text-secondary'>
                        <LoremIpsum />
                    </ShowMore.Content>
                    <ShowMore.Trigger />
                </ShowMore>
            </div>
        );
    },
};

export const ExpandedByDefault: Story = {
    render: () => {
        return (
            <div class='flex size-96 flex-col gap-2 overflow-y-auto p-2'>
                <h1 class='font-semibold text-xl'>Message</h1>
                <ShowMore defaultExpanded>
                    <ShowMore.Content class='max-h-32 text-text-secondary'>
                        <LoremIpsum />
                    </ShowMore.Content>
                    <ShowMore.Trigger />
                </ShowMore>
            </div>
        );
    },
};

export const ReadMoreTrigger: Story = {
    render: () => {
        return (
            <div class='flex size-96 flex-col gap-2 overflow-y-auto p-2'>
                <h1 class='font-semibold text-xl'>Message</h1>
                <ShowMore>
                    <ShowMore.Content class='max-h-32 text-text-secondary'>
                        <LoremIpsum />
                    </ShowMore.Content>
                    <ShowMore.ReadMore />
                </ShowMore>
            </div>
        );
    },
};

export const customTrigger: Story = {
    render: () => {
        return (
            <div class='flex size-96 flex-col gap-2 overflow-y-auto p-2'>
                <h1 class='font-semibold text-xl'>Message</h1>
                <ShowMore>
                    <ShowMore.Content class='max-h-32 text-text-secondary'>
                        <LoremIpsum />
                    </ShowMore.Content>
                    <ShowMore.Trigger>
                        {(isExpanded, setIsExpanded) => (
                            <Button
                                onClick={() => setIsExpanded((prev) => !prev)}
                                variant={isExpanded ? 'outline' : 'primary'}
                            >
                                <Show
                                    fallback={<>Read More</>}
                                    when={isExpanded}
                                >
                                    Read Less
                                </Show>
                            </Button>
                        )}
                    </ShowMore.Trigger>
                </ShowMore>
            </div>
        );
    },
};
