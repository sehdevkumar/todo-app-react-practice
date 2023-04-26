import './App.scss';
import { AppHeader } from './layouts/app-header';
import { AppSideBar } from './layouts/app-sidebar';
import { MenuItem } from './typings/app-common-typins';

function App() {
    
  const onMenuItemsClicked = (item:MenuItem)=> {
     console.log(item);
  }
     


  return (
    <div className='app-bg'>
        <AppHeader />
        <AppSideBar onOutput={onMenuItemsClicked} />
    </div>
  );
}

export default App;
