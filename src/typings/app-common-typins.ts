export interface InputOutputProps {
     onOutput?:(...args: any)=>void,
     onInput?:(...args:any)=>void
}

export interface MenuItem {
      itemName:string;
      itemIcon:string;
      isItemActive:boolean;
}