import { createSignal, Match, Switch } from 'solid-js';
import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import {
    IconMediaVolumeMax,
    IconMediaVolumeMin,
    IconMediaVolumeOff,
    IconMediaVolumeOff02,
} from '~/icons';
import { Button } from '~/ui/Button';

import { Slider } from './Slider';

const meta = {
    title: 'Ui/Slider',
    component: Slider,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
    render: () => {
        const [value, setValue] = createSignal(30);

        return (
            <Slider onInput={setValue} value={value()}>
                <Slider.Input />
            </Slider>
        );
    },
};

export const WithLabel: Story = {
    render: () => {
        const [value, setValue] = createSignal(20);

        return (
            <Slider onInput={setValue} value={value()}>
                <Slider.Label>
                    <div class='flex justify-between'>
                        <span>Volume</span>
                        <span>{value()}%</span>
                    </div>
                </Slider.Label>
                <Slider.Input />
            </Slider>
        );
    },
};

export const WithIcon: Story = {
    render: () => {
        const [value, setValue] = createSignal(20);

        return (
            <Slider onInput={setValue} value={value()}>
                <Slider.Label>
                    <span>Volume</span>
                </Slider.Label>
                <div class='flex gap-1'>
                    <Switch>
                        <Match when={value() === 0}>
                            <IconMediaVolumeOff class='size-5' />
                        </Match>
                        <Match when={value() >= 80}>
                            <IconMediaVolumeMax class='size-5' />
                        </Match>
                        <Match when={value() < 80}>
                            <IconMediaVolumeMin class='size-5' />
                        </Match>
                    </Switch>
                    <Slider.Input class='flex-1' />
                    <span class='w-8 text-right text-sm tabular-nums'>
                        {value()}%
                    </span>
                </div>
            </Slider>
        );
    },
};

export const WithExternalButton: Story = {
    render: () => {
        const [value, setValue] = createSignal(20);
        const [prevValue, setPrevValue] = createSignal<number | null>(null);

        const toggleMute = () => {
            if (value() !== 0) setPrevValue(value());

            if (value() === 0) setValue(prevValue() ?? 0);
            else setValue(0);
        };

        return (
            <div class='flex flex-col gap-2'>
                <Slider onInput={setValue} value={value()}>
                    <Slider.Label>
                        <span>Volume</span>
                    </Slider.Label>
                    <div class='flex gap-1'>
                        <Switch>
                            <Match when={value() === 0}>
                                <IconMediaVolumeOff class='size-5' />
                            </Match>
                            <Match when={value() >= 80}>
                                <IconMediaVolumeMax class='size-5' />
                            </Match>
                            <Match when={value() < 80}>
                                <IconMediaVolumeMin class='size-5' />
                            </Match>
                        </Switch>
                        <Slider.Input class='flex-1' />
                        <span class='w-8 text-right text-sm tabular-nums'>
                            {value()}%
                        </span>
                    </div>
                </Slider>
                <Button
                    class='self-start'
                    onClick={toggleMute}
                    variant='primary'
                >
                    <IconMediaVolumeOff02 /> Mute
                </Button>
            </div>
        );
    },
};

export const WithMarkers: Story = {
    render: () => {
        const [value, setValue] = createSignal(20);

        return (
            <>
                <Slider list='markers' onInput={setValue} value={value()}>
                    <Slider.Label>
                        <div class='flex justify-between'>
                            <span>Volume</span>
                            <span>{value()}%</span>
                        </div>
                    </Slider.Label>
                    <Slider.Input />
                </Slider>
                <datalist id='markers'>
                    <option value='0' />
                    <option value='25' />
                    <option value='50' />
                    <option value='75' />
                    <option value='100' />
                </datalist>
            </>
        );
    },
};

export const Disabled: Story = {
    render: () => {
        const [value, setValue] = createSignal(30);

        return (
            <Slider disabled onInput={setValue} value={value()}>
                <Slider.Input />
            </Slider>
        );
    },
};
