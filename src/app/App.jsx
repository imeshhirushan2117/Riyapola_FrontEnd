import './App.css'
import Home from '../pages/Home/Home'
import LogIn from '../pages/LogIn/LogIn'
import SecandFooter from '../common/SecandFooter/SecandFooter'
import { Routes, Route, Link, Navigate } from 'react-router-dom'
import DrawerNav from '../Components/DrawerNav/DrawerNav'

function App() {
  return (
    // <Routes>
    //   <Route path='*' element={<Navigate to={'/home'} />}/>
    //   <Route path={'/home'} element={<Home />} />
    //   <Route path={'/login'} element={<LogIn />} />
    // </Routes>

    <DrawerNav/>

  )
}

export default App
