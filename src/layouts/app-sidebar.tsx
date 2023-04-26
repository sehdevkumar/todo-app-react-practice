import { AppMenuItems } from '../shared/apps-config'
import { InputOutputProps, MenuItem } from '../typings/app-common-typins'

export const AppSideBar = (props: InputOutputProps) => {
  const menuItemList: Array<MenuItem> = AppMenuItems

  return (
    <div className='flex flex-column flex-justify-between hp-100 w-200'>
      {menuItemList?.map((item) => {
        return (
          <div key={item?.itemName}>
            <div>{item?.itemName}</div>
          </div>
        )
      })}
    </div>
  )
}
