import { Content } from '~/ui/DropdownMenu/Content';
import { Trigger } from '~/ui/DropdownMenu/Trigger';
import { Menu, type MenuCompound } from '~/ui/Menu';

type DropdownMenuCompound = MenuCompound & {
    Trigger: typeof Trigger;
    Content: typeof Content;
};

export const DropdownMenu = Menu as DropdownMenuCompound;

DropdownMenu.Trigger = Trigger;
DropdownMenu.Content = Content;
