import { Routes, Route } from 'react-router-dom'
import { routes } from './constants'
import Login from '../pages/login'
import Home from '../pages/home'
import Search from '../pages/search'

const UserRoutes = () => {
    return(
        <Routes>
            <Route path={routes.default} element={<Login/>}/>
            <Route path={routes.login} element={<Login/>}/>
            <Route path={routes.home} element={<Home/>}/>
            <Route path={routes.search} element={<Search/>}/>
        </Routes>
    )
}

export default UserRoutes