import Home from '../pages/Home'
import Following from '../pages/Following'
import Profile from '../pages/Profile'
import Upload from '../pages/Upload'
import HeaderOnly from '../components/Layout/HeaderOnly'
//kkhoong cần đnawg nhập
const publicRoutes = [
    {path: '/' , component: Home},
    {path: '/following' , component: Following},
    {path: '/profile' , component: Profile},
    {path: '/upload' , component: Upload, layout: HeaderOnly}

]
//cần đnawg nhập
const privateRoutes = [
    
]
export {publicRoutes, privateRoutes}