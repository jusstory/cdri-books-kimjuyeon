export interface DropdownMenuPropsType {
  menu: string;
  id: string;
}

export interface DropdownPropsType {
  id: string;
  menuData: DropdownMenuPropsType[];
  onClick?: (selectMenuData: DropdownMenuPropsType) => void;
  className?: string;
  selectMenu?: DropdownMenuPropsType;
}
