import './App.scss';
import { AppHeader } from './layouts/app-header';
import { AppSideBar } from './layouts/app-sidebar';
import { MenuItem } from './typings/app-common-typins';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeApp } from './components/home';
function App() {
    
  const onMenuItemsClicked = (item:MenuItem)=> {
     console.log(item);
  }
     


  return (
    
    <BrowserRouter>
       <div className='app-bg'>
          <AppHeader />
           <AppSideBar onOutput={onMenuItemsClicked} />
       </div>
     <Routes>
             
    {/* <Route path='home' Component={HomeApp}/>
    <Route path='side' Component={HomeApp}/> */}
  

     </Routes>


  </BrowserRouter>

  );
}

export default App;
