import React from 'react';
import { ListItemStyle, ListStyle } from './listStyle';

type ListPropsType = {
  className?: string;
  listItemData: ListItemProps[];
};

interface ListItemProps {
  id: string;
  contents: React.ReactNode;
  disabled?: boolean;
}

function List({ className, listItemData }: ListPropsType) {
  return (
    <ListStyle className={className || ''}>
      {listItemData.map((listItem) => {
        return (
          <ListItemStyle key={listItem.id}>{listItem.contents}</ListItemStyle>
        );
      })}
    </ListStyle>
  );
}

export { List };
