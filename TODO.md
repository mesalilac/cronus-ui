# TODO List

## Feat
- Input/Textarea - display min and max lengths
- add id to Fieldset
- add required to Fieldset

## Refactor
- Input - offload error and label to `Field`, also make sure autofocus is working again
    - Remove `HelperText` component and `FieldLabel`
- Floating-ui - use @floating-ui/dom for popover implementation.

## Fix

## New components
- InputGroup - <https://ui.shadcn.com/docs/components/radix/input-group>
- Drawer - <https://corvu.dev/docs/primitives/drawer/>
- Carousel - <https://flowbite.com/docs/components/carousel/>
- Meter - <https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/meter>

### Ideas
- FilePathField - component with a browse button and a check or cross to appear if the path doesn't exists
    - variants - folder image file
