import { AppMenuItems } from '../shared/apps-config'
import { InputOutputProps, MenuItem } from '../typings/app-common-typins'
import './app-layout.scss';


export const AppSideBar = (props: InputOutputProps) => {
  const menuItemList: Array<MenuItem> = AppMenuItems

  return (
    <div className='sidebar flex flex-column flex-justify-center hp-100 w-200 position-fixed tx-0'>
      {menuItemList?.map((item) => {
        return (
          <ul key={item?.itemName}>
            <li className='mt-10'>{item?.itemName}</li>
          </ul>
        )
      })}
    </div>
  )
}
