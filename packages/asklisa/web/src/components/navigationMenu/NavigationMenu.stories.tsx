import React from 'react';
import { Menu } from 'semantic-ui-react';

import NavigationMenu, { NavigationMenuProps } from './NavigationMenu';

export default {
  component: NavigationMenu,
  title: 'Design System/NavigationMenu',
};
export const primary = ({ handleItemClick, activeItem }: NavigationMenuProps) => (
  <>
    <Menu pointing fixed='top' color='teal' borderless size='large'>
      <Menu.Item name='home' active={activeItem === 'home'} onClick={handleItemClick} />
      <Menu.Item name='results' active={activeItem === 'results'} onClick={handleItemClick} />
      <Menu.Item name='add new scan' active={activeItem === 'add new scan'} onClick={handleItemClick} />
    </Menu>
  </>
);
