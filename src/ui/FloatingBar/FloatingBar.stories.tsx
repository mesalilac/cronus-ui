import type { FlowComponent, VoidComponent } from 'solid-js';
import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowDownMd, IconArrowUpMd } from '~/icons';
import { Button } from '~/ui/Button';
import { cn } from '~/utils';

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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            sagittis, ipsum in tristique accumsan, erat sem bibendum justo, vel
            dictum arcu mi sit amet ex. Ut quis auctor massa, et porta felis.
            Duis ut sapien lectus. Sed elementum congue molestie. Donec aliquam
            eros vel consectetur efficitur. Etiam commodo blandit neque, a
            fringilla magna tincidunt quis. Nulla sit amet odio sagittis,
            blandit nunc vel, scelerisque nulla. Nulla facilisis finibus
            pretium. Nulla in nunc justo. Duis interdum pulvinar sem eu
            fermentum. Donec dictum a massa eu iaculis. Sed sagittis velit a
            nunc ultrices, eget tempus est tincidunt. Aenean interdum tellus ut
            feugiat porttitor. Phasellus interdum consectetur elit eu dapibus.
            Duis vitae pretium est. Aliquam erat volutpat. Proin varius
            consectetur leo vulputate lacinia. Curabitur non congue elit.
            Aliquam erat volutpat. Suspendisse vel aliquet risus, tempus
            tincidunt nisl. Nullam eget viverra dui. Ut lacinia metus sit amet
            lectus fringilla feugiat. In facilisis dui quis ipsum pellentesque
            sodales. Nam risus quam, commodo tempor suscipit id, viverra eget
            ex. Mauris erat dolor, scelerisque id ullamcorper in, malesuada at
            nulla. Mauris ac neque interdum, vestibulum nisi at, hendrerit odio.
            Phasellus vitae quam in enim porttitor ornare. Aenean blandit
            finibus elit, vitae tincidunt augue iaculis ac. Vestibulum tempor
            egestas felis, non tempus augue. Vivamus congue tempor tortor non
            congue. Nullam fringilla tempus finibus. Mauris ornare efficitur
            metus, ut sodales orci rhoncus eu. Aenean bibendum hendrerit neque,
            sit amet cursus leo cursus ut. Maecenas id justo finibus, viverra
            dolor ut, commodo nibh. Sed a turpis non sapien rhoncus ornare. Duis
            orci augue, luctus ut tempus sed, consequat in risus. Sed tristique
            ultrices finibus. Nam gravida eleifend malesuada. Maecenas nec
            imperdiet mi. Quisque commodo diam non mauris porta porttitor.
            Quisque erat augue, vehicula id cursus sed, gravida in nisl. Aliquam
            erat volutpat. Curabitur luctus eros in feugiat porta. Sed eget erat
            sit amet metus faucibus feugiat. Mauris non fringilla nisl, sed
            ultricies felis. Cras lorem justo, mollis quis consectetur at,
            consectetur sit amet est. Donec vehicula posuere erat, rutrum
            accumsan tortor laoreet quis. Sed tincidunt, metus a maximus
            vulputate, nibh nulla consequat massa, sed pulvinar augue velit sed
            diam. Nam commodo augue commodo ante sagittis auctor. Quisque
            finibus consequat hendrerit. In hac habitasse platea dictumst. Ut
            ullamcorper velit ipsum, finibus lobortis dui sollicitudin at.
            Maecenas rhoncus nunc quis tempus placerat. Morbi dapibus blandit
            orci, nec finibus est ultrices laoreet. Suspendisse turpis sem,
            pellentesque ut dui nec, varius rutrum nisl. Duis vel libero quam.
            Sed fermentum mauris mi, vitae dapibus elit ultricies quis.
            Vestibulum ut dapibus leo. Maecenas in erat in massa euismod posuere
            eu eu tellus. Pellentesque vitae orci vitae nulla congue
            pellentesque vitae vel turpis. Quisque porta nibh eu elit dignissim,
            in vestibulum tortor maximus. Aenean volutpat enim nec sem sagittis,
            eu malesuada sapien vehicula. Morbi congue urna lectus, nec vehicula
            magna vehicula quis. Donec tincidunt massa mauris, ac condimentum
            nunc interdum id. In quis dictum est. Vivamus sagittis gravida
            felis. Proin dictum massa facilisis, condimentum nisl sed, tempor
            justo. Phasellus ex felis, fringilla at ipsum eget, elementum
            sagittis diam. Aenean nec dui in purus placerat pharetra.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Vestibulum vitae vulputate mi. Sed vitae
            justo fringilla, rutrum dui et, accumsan lectus. Nunc ac sapien
            orci. Ut posuere augue non sollicitudin molestie. Suspendisse
            potenti. Nullam gravida rutrum erat ut pellentesque. Ut fringilla
            ullamcorper est ut tempus. Quisque nulla turpis, pulvinar nec
            finibus vitae, accumsan sed sapien. Aliquam vehicula turpis urna,
            vel tempor magna ultricies nec. Pellentesque commodo mauris ut felis
            placerat porttitor. Aliquam quis purus leo. Praesent rhoncus cursus
            diam at scelerisque. Donec aliquet augue nec dui semper, quis luctus
            sapien laoreet. Vestibulum semper bibendum metus eu maximus. Morbi
            non libero ut dui finibus tristique. Aliquam convallis id augue eu
            mollis. Nulla eget neque in massa congue dignissim ac blandit diam.
            Sed eleifend eu arcu quis aliquet. Vivamus et lectus sollicitudin
            dolor tempor elementum. Cras vel blandit ex, at dignissim sapien.
            Fusce et ullamcorper nisl. Aliquam convallis felis sit amet nunc
            auctor mollis eget et nisi. Nullam quis turpis accumsan, viverra
            libero a, feugiat sem. Nulla vestibulum metus nec dui hendrerit
            fermentum. Suspendisse potenti. Donec aliquet bibendum imperdiet.
            Proin cursus varius ipsum, sit amet sodales urna iaculis nec. Cras
            efficitur tellus viverra, porta dolor at, rutrum velit. Pellentesque
            ut nulla in ipsum placerat volutpat et nec metus. Nullam at nibh a
            mauris volutpat interdum. Vestibulum ante ipsum primis in faucibus
            orci luctus et ultrices posuere cubilia curae; Morbi viverra turpis
            ut neque volutpat, sit amet vulputate sapien porta. Phasellus dolor
            velit, ultrices nec ultricies ac, eleifend non lorem. Nam gravida eu
            ex ac hendrerit. Sed fringilla sem velit. Curabitur ac justo et nisi
            dapibus consequat eget ut libero. Duis id mauris felis. In luctus,
            sapien vel sodales sagittis, sem quam lobortis enim, sed placerat
            erat ex in risus. Integer a massa lectus. Nam fermentum non nunc
            vitae tempus. Donec posuere condimentum felis vitae eleifend. Proin
            eleifend felis id leo elementum, et finibus neque feugiat. Aliquam
            tincidunt mattis fringilla. Pellentesque ultricies pharetra ex nec
            accumsan. Sed ac eros nisl. Vivamus molestie ullamcorper nulla vel
            pharetra. Curabitur aliquet rhoncus tortor, eget fringilla magna
            volutpat at. Quisque venenatis posuere metus, nec gravida mauris
            iaculis non. Nullam a suscipit mi. Nam laoreet pulvinar libero id
            porttitor. Nullam urna metus, ullamcorper nec risus sit amet,
            sollicitudin euismod eros. Quisque quis urna lacus. Phasellus erat
            sem, fermentum vel ex sed, malesuada pretium ante. Vivamus at est
            pulvinar, laoreet mauris sed, pulvinar nunc. Donec sagittis ultrices
            ornare. Nulla in odio ullamcorper, posuere lacus eu, fermentum dui.
            Sed sed elementum ex, ut rutrum metus. Proin tempus sodales dolor
            sed mollis. Sed vulputate leo et orci mollis, a mattis quam commodo.
            Vivamus ut dolor dolor. Sed in varius nunc. Nunc sollicitudin
            laoreet tincidunt. Etiam blandit aliquet dapibus. Etiam consequat,
            enim eu iaculis finibus, eros mauris dictum enim, in rhoncus mauris
            urna at lacus. Morbi congue ipsum odio, eu ornare tortor faucibus
            in. Phasellus diam nulla, sodales in rutrum sit amet, sollicitudin
            eget arcu. Donec risus ante, sollicitudin sit amet iaculis vitae,
            efficitur vulputate dolor. Aenean mollis suscipit ex. In metus
            augue, laoreet nec scelerisque quis, laoreet nec libero. Orci varius
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Etiam efficitur rhoncus lorem. Pellentesque mi ex,
            consequat sit amet arcu vel, lobortis commodo eros. Nulla porttitor
            vitae sapien a molestie. Mauris at aliquam ex. Aliquam mollis augue
            vitae elit ultrices semper. Suspendisse in tincidunt urna. In vel
            risus vel nibh congue hendrerit. Donec non placerat purus. Integer
            at lacinia odio, sed finibus tortor. Vestibulum tempor ante ut diam
            interdum fermentum. Fusce massa purus, semper nec aliquet at,
            interdum at elit. Etiam scelerisque tellus egestas lacus pharetra
            laoreet. Etiam massa sapien, rutrum ut augue sit amet, fringilla
            tincidunt nibh. Morbi sodales vestibulum felis ut semper.
            Suspendisse eget purus tristique erat dignissim tincidunt. Nam
            lacinia erat ut urna egestas, in dapibus mauris dapibus. Quisque
            nisl eros, bibendum id porta id, sollicitudin quis neque. Phasellus
            eget nulla libero. Cras hendrerit, felis eu semper vestibulum,
            ligula sapien ultricies metus, ac posuere odio sem maximus nisi. In
            hac habitasse platea dictumst. In efficitur lacinia nunc, sit amet
            tincidunt neque. Vestibulum nec turpis libero. Mauris auctor neque
            sed augue molestie pulvinar. Donec at malesuada enim, eu egestas
            arcu. Maecenas volutpat, arcu sit amet semper venenatis, turpis
            dolor interdum odio, vitae venenatis turpis urna vitae sem. Sed et
            tortor dapibus, pharetra purus eget, gravida libero. Suspendisse
            eget libero non urna suscipit gravida. Vestibulum eget eros lacus.
            Pellentesque ac enim non arcu tristique suscipit mollis non ligula.
            Fusce mollis lobortis erat a accumsan. Ut ut dolor eget ex dapibus
            dapibus nec sed odio. Nullam facilisis nunc dui, ac pretium mauris
            dignissim vitae. Curabitur porta orci vel enim luctus congue. Duis
            sem diam, pretium a iaculis at, lacinia hendrerit elit. Donec
            tincidunt diam velit, et dignissim magna posuere in. Quisque
            bibendum nisl ex, vel mattis enim aliquam et. Pellentesque quis
            ligula ac ex pretium faucibus eget non nisl. Maecenas sed eleifend
            ipsum. Integer accumsan, sem et placerat semper, erat sem fermentum
            dui, at aliquam felis magna mattis metus. Etiam et lacus fermentum,
            cursus massa at, posuere nulla. Quisque ornare nibh et ante
            tristique pellentesque. Etiam tortor diam, bibendum eu scelerisque
            at, ullamcorper at metus. Vestibulum efficitur ultricies odio, vel
            pretium quam tincidunt consequat. Pellentesque vel eros ac turpis
            elementum interdum ut ac ante. Morbi ac leo vehicula elit interdum
            tempor. Ut in tellus aliquam, gravida sapien non, congue purus. Ut
            eget velit ut velit ultrices pulvinar in ut odio. Nam bibendum purus
            a est consectetur egestas. Nulla facilisi. Phasellus ut augue neque.
            Phasellus mauris nisi, dignissim quis orci non, imperdiet suscipit
            dolor. In suscipit risus sed risus feugiat vulputate. Cras rutrum
            tempus nulla, sed cursus velit cursus sed. Quisque imperdiet felis
            in metus vehicula sagittis. Vivamus at faucibus arcu. Fusce
            facilisis tincidunt sem at pretium. Phasellus non massa arcu. Aenean
            quis nulla vehicula, tincidunt metus in, aliquam libero. In euismod
            est non libero dapibus, ut malesuada felis tempor. Pellentesque sed
            turpis sagittis lectus fermentum porta. Curabitur a aliquam magna.
            Etiam placerat porta nisl et commodo. Nam blandit lobortis nisi at
            semper. Vivamus varius mollis semper. Vestibulum interdum vitae sem
            vitae volutpat. Fusce velit enim, lacinia eu turpis sit amet,
            tincidunt pellentesque magna. Sed ac interdum nulla. Suspendisse
            bibendum pulvinar facilisis. Aliquam quis elit mauris. Aliquam
            ornare tincidunt lacus ac lobortis. Sed mollis felis quis fringilla
            luctus. In lorem mi, feugiat et ipsum ut, ornare venenatis ex. Nunc
            in quam vitae quam feugiat placerat. Suspendisse vestibulum blandit
            pulvinar. Etiam pellentesque a ligula sit amet consequat. Mauris leo
            est, mollis ac aliquet non, imperdiet eget lectus. Integer vehicula,
            lacus dignissim tristique porttitor, libero libero convallis felis,
            sit amet suscipit leo eros ut nisl. Cras velit lectus, sollicitudin
            vel elit luctus, pulvinar tristique enim. Nunc non consectetur
            felis, quis blandit nisl. Vivamus condimentum aliquam dui fermentum
            ultricies. Vivamus iaculis, leo nec ornare posuere, tortor nibh
            ultrices felis, in ullamcorper purus urna ac ipsum. Etiam nibh
            felis, consectetur nec semper et, fermentum eget sem.
        </>
    );
};

const Wrapper: FlowComponent<{ class?: string }> = (props) => {
    return (
        <div
            class={cn(
                'size-124 overflow-y-auto rounded-default bg-surface-1 p-2 outline outline-border',
                props.class,
            )}
        >
            {props.children}
        </div>
    );
};

export const Default: Story = {
    render: () => {
        return (
            <Wrapper class='relative'>
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

export const Top: Story = {
    render: () => {
        return (
            <div class='flex flex-col gap-2'>
                <Wrapper class='relative h-48'>
                    <FloatingBar alignment='start' position='top'>
                        scroll to the bottom
                        <Button appearance='primary' size='icon'>
                            <IconArrowDownMd />
                        </Button>
                    </FloatingBar>
                </Wrapper>
                <Wrapper class='relative h-48'>
                    <FloatingBar alignment='center' position='top'>
                        scroll to the bottom
                        <Button appearance='primary' size='icon'>
                            <IconArrowDownMd />
                        </Button>
                    </FloatingBar>
                </Wrapper>
                <Wrapper class='relative h-48'>
                    <FloatingBar alignment='end' position='top'>
                        scroll to the bottom
                        <Button appearance='primary' size='icon'>
                            <IconArrowDownMd />
                        </Button>
                    </FloatingBar>
                </Wrapper>
            </div>
        );
    },
};

export const Right: Story = {
    render: () => {
        return (
            <div class='flex gap-2'>
                <Wrapper class='relative w-48'>
                    <FloatingBar alignment='start' position='right'>
                        <Button appearance='primary' size='icon'>
                            <IconArrowUpMd />
                        </Button>
                        <Button appearance='primary' size='icon'>
                            <IconArrowDownMd />
                        </Button>
                    </FloatingBar>
                </Wrapper>
                <Wrapper class='relative w-48'>
                    <FloatingBar alignment='center' position='right'>
                        <Button appearance='primary' size='icon'>
                            <IconArrowUpMd />
                        </Button>
                        <Button appearance='primary' size='icon'>
                            <IconArrowDownMd />
                        </Button>
                    </FloatingBar>
                </Wrapper>
                <Wrapper class='relative w-48'>
                    <FloatingBar alignment='end' position='right'>
                        <Button appearance='primary' size='icon'>
                            <IconArrowUpMd />
                        </Button>
                        <Button appearance='primary' size='icon'>
                            <IconArrowDownMd />
                        </Button>
                    </FloatingBar>
                </Wrapper>
            </div>
        );
    },
};

export const Bottom: Story = {
    render: () => {
        return (
            <div class='flex flex-col gap-2'>
                <Wrapper class='relative h-48'>
                    <FloatingBar alignment='start' position='bottom'>
                        scroll to the bottom
                        <Button appearance='primary' size='icon'>
                            <IconArrowDownMd />
                        </Button>
                    </FloatingBar>
                </Wrapper>
                <Wrapper class='relative h-48'>
                    <FloatingBar alignment='center' position='bottom'>
                        scroll to the bottom
                        <Button appearance='primary' size='icon'>
                            <IconArrowDownMd />
                        </Button>
                    </FloatingBar>
                </Wrapper>
                <Wrapper class='relative h-48'>
                    <FloatingBar alignment='end' position='bottom'>
                        scroll to the bottom
                        <Button appearance='primary' size='icon'>
                            <IconArrowDownMd />
                        </Button>
                    </FloatingBar>
                </Wrapper>
            </div>
        );
    },
};

export const Left: Story = {
    render: () => {
        return (
            <div class='flex gap-2'>
                <Wrapper class='relative w-48'>
                    <FloatingBar alignment='start' position='left'>
                        <Button appearance='primary' size='icon'>
                            <IconArrowUpMd />
                        </Button>
                        <Button appearance='primary' size='icon'>
                            <IconArrowDownMd />
                        </Button>
                    </FloatingBar>
                </Wrapper>
                <Wrapper class='relative w-48'>
                    <FloatingBar alignment='center' position='left'>
                        <Button appearance='primary' size='icon'>
                            <IconArrowUpMd />
                        </Button>
                        <Button appearance='primary' size='icon'>
                            <IconArrowDownMd />
                        </Button>
                    </FloatingBar>
                </Wrapper>
                <Wrapper class='relative w-48'>
                    <FloatingBar alignment='end' position='left'>
                        <Button appearance='primary' size='icon'>
                            <IconArrowUpMd />
                        </Button>
                        <Button appearance='primary' size='icon'>
                            <IconArrowDownMd />
                        </Button>
                    </FloatingBar>
                </Wrapper>
            </div>
        );
    },
};

export const Scrollable: Story = {
    render: () => {
        return (
            <div class='relative'>
                <Wrapper>
                    <FloatingBar>
                        scroll to the bottom
                        <Button appearance='primary' size='icon'>
                            <IconArrowDownMd />
                        </Button>
                    </FloatingBar>
                    <PlaceholderContent />
                </Wrapper>
            </div>
        );
    },
};
