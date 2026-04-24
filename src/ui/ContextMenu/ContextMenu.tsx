import { Content } from '~/ui/ContextMenu/Content';
import { ContextMenuTrigger as Trigger } from '~/ui/ContextMenu/Trigger';
import { Menu, type MenuCompound } from '~/ui/Menu';
import { Item } from '~/ui/Menu/Item';
import { ItemCheckbox } from '~/ui/Menu/ItemCheckbox';
import { ItemSwitch } from '~/ui/Menu/ItemSwitch';
import { Label } from '~/ui/Menu/Label';
import { RadioGroup } from '~/ui/Menu/RadioGroup';
import { MenuSeparator } from '~/ui/Menu/Separator';
import { Sub } from '~/ui/Menu/Sub';

type ContextMenuCompound = MenuCompound & {
    Trigger: typeof Trigger;
    Content: typeof Content;
};

export const ContextMenu = ((props) => {
    return <Menu {...props} />;
}) as ContextMenuCompound;

ContextMenu.Trigger = Trigger;
ContextMenu.Content = Content;
ContextMenu.Item = Item;
ContextMenu.ItemSwitch = ItemSwitch;
ContextMenu.ItemCheckbox = ItemCheckbox;
ContextMenu.Label = Label;
ContextMenu.Separator = MenuSeparator;

ContextMenu.Sub = Sub;
ContextMenu.RadioGroup = RadioGroup;
