import type { FlowComponent, VoidComponent } from 'solid-js';
import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowDownMd } from '~/icons';
import { Button } from '~/ui/Button';

import { FloatingBar } from './FloatingBar';

type StoryComponent = typeof FloatingBar;

const meta = {
    title: 'Ui/FloatingBar',
    component: FloatingBar,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<StoryComponent>;

export default meta;

type Story = StoryObj<StoryComponent>;

const PlaceholderContent: VoidComponent = () => {
    return (
        <>
            Id tempor labore tempor in nisi eiusmod laborum veniam enim
            consectetur cillum sunt eu. Cillum laborum ex irure amet aliquip
            labore id anim ex dolor magna occaecat amet dolore. Deserunt fugiat
            duis do nostrud nisi magna non exercitation ad culpa mollit enim
            labore in. Officia aliquip id non labore minim labore amet velit
            reprehenderit eu anim ad. Eu non eiusmod aliquip velit officia
            consequat sunt. Aute reprehenderit exercitation nulla excepteur non
            irure irure quis nostrud. Sunt eu ullamco eiusmod elit nisi
            consectetur consectetur cupidatat. Quis consequat laboris labore
            aliquip dolor velit adipisicing ea officia magna. Qui laboris
            consectetur voluptate nostrud deserunt voluptate. Quis deserunt ad
            aliquip incididunt non anim consectetur magna quis adipisicing
            officia. Eu minim magna sit esse consequat aliqua ut officia
            reprehenderit incididunt et tempor pariatur.
        </>
    );
};

const Wrapper: FlowComponent = (props) => {
    return (
        <div class='relative size-124 overflow-y-auto rounded-default bg-surface-1 p-2 outline outline-border'>
            {props.children}
        </div>
    );
};

export const Default: Story = {
    render: () => {
        return (
            <Wrapper>
                <FloatingBar>
                    scroll to the bottom
                    <Button appearance='primary' size='icon'>
                        <IconArrowDownMd />
                    </Button>
                </FloatingBar>
            </Wrapper>
        );
    },
};

export const Scrollable: Story = {
    render: () => {
        return (
            <Wrapper>
                <FloatingBar>
                    scroll to the bottom
                    <Button appearance='primary' size='icon'>
                        <IconArrowDownMd />
                    </Button>
                </FloatingBar>
                <PlaceholderContent />
            </Wrapper>
        );
    },
};
