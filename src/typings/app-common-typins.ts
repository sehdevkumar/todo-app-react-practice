export interface InputOutputProps {
     onOutput?:(...args: any)=>void,
     onInput?:(...args:any)=>void
}

export interface MenuItem {
      itemName:string;
      navigation:string;
      itemIcon:string;
      isItemActive:boolean;
}

export enum AppPathEnums {
      Home='home',
      Todo='todo',
      History='history'
}