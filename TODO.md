# TODO List

## Feat
- FloatingBar - something like discord's "you're Viewing Older Messages 'Jump To Present'", also allow changing position, alignment and orientation
- Input/Textarea - display min and max lengths

## Refactor
- Input - offload error and label to `Fieldset`, also make sure autofocus is working again

## Fix
- Progress(webkit) - wrong colors and border radius
- Slider(webkit) - wrong hover color

## New components
- Fieldset - <https://headlessui.com/react/fieldset>
    - Remove `HelperText` component and `FieldLabel`
- Tooltip - <https://corvu.dev/docs/primitives/tooltip/>
- Drawer - <https://corvu.dev/docs/primitives/drawer/>
- Tabs - <https://kobalte.dev/docs/core/components/tabs>
- Carousel - <https://flowbite.com/docs/components/carousel/>
- Meter - <https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/meter>

### Ideas
- PathInput component with a browse button and a check or cross to appear if the path doesn't exists
- CopyInput component readonly text and copy button
