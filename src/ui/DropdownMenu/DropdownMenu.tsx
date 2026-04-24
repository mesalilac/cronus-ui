import { Content } from '~/ui/DropdownMenu/Content';
import { Trigger } from '~/ui/DropdownMenu/Trigger';
import { Menu, type MenuCompound } from '~/ui/Menu';
import { Item } from '~/ui/Menu/Item';
import { ItemCheckbox } from '~/ui/Menu/ItemCheckbox';
import { ItemSwitch } from '~/ui/Menu/ItemSwitch';
import { Label } from '~/ui/Menu/Label';
import { RadioGroup } from '~/ui/Menu/RadioGroup';
import { MenuSeparator } from '~/ui/Menu/Separator';
import { Sub } from '~/ui/Menu/Sub';

type DropdownMenuCompound = MenuCompound & {
    Trigger: typeof Trigger;
    Content: typeof Content;
};

export const DropdownMenu = ((props) => {
    return <Menu {...props} />;
}) as DropdownMenuCompound;

DropdownMenu.Trigger = Trigger;
DropdownMenu.Content = Content;
DropdownMenu.Item = Item;
DropdownMenu.ItemSwitch = ItemSwitch;
DropdownMenu.ItemCheckbox = ItemCheckbox;
DropdownMenu.Label = Label;
DropdownMenu.Separator = MenuSeparator;

DropdownMenu.Sub = Sub;
DropdownMenu.RadioGroup = RadioGroup;
