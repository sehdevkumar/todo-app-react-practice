import './App.scss'
import { AppHeader } from './layouts/app-header'
import { AppSideBar } from './layouts/app-sidebar'
import { AppPathEnums, MenuItem } from './typings/app-common-typins'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomeApp } from './components/home'
import { AppTodo } from './components/todo'
import { AppHistory } from './components/history'
function App() {
  const onMenuItemsClicked = (item: MenuItem) => {
    console.log(item)
  }

  return (
    <BrowserRouter>
      <div className="App app-bg">
        <div className="sidebar">
          <AppSideBar onOutput={onMenuItemsClicked} />
        </div>
        <div className="main-container">
          <AppHeader />
          
          <Routes>
            <Route path={AppPathEnums.Home} element={<HomeApp />} />
            <Route path={AppPathEnums.Todo}  element={<AppTodo />} />
            <Route path={AppPathEnums.History}   element={<AppHistory />}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
