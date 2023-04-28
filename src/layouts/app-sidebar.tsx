import { AppMenuItems } from '../shared/apps-config';
import { InputOutputProps, MenuItem } from '../typings/app-common-typins';
import './app-layout.scss';
import { NavLink } from 'react-router-dom';
import { CSSProperties, useState } from 'react';

export const AppSideBar = (props: InputOutputProps) => {
  const [menuItemList, setMenuItemList] = useState<Array<MenuItem>>(AppMenuItems);

  /**
   *  On Navigation Clicked  
   * @param item 
   */
  const onNavClicked = (item: MenuItem): void => {
    const updatedMenuItems = menuItemList.map((menuItem) => {
      if (menuItem === item) {
        return { ...menuItem, isItemActive: true };
      } else {
        return { ...menuItem, isItemActive: false };
      }
    });
    setMenuItemList(updatedMenuItems);
  };


  const Styles:CSSProperties = {
      textDecoration:'none'
  }

  return (
    <div className="sidebar flex flex-column flex-justify-center w-200">
      <ul>
      {menuItemList.map((item) => {
        return (
            <li key={item.itemName} className="mt-10 text-center">
              <NavLink
                className={item.isItemActive ? 'activeNavClass fs-22' : 'white fs-20'}
                style={Styles}
                to={item.navigation}
                onClick={() => onNavClicked(item)}
              >
                {item.itemName}
              </NavLink>
            </li>
        );
      })}
      </ul>
    </div>
  );
};
