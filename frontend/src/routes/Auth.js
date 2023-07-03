import { Navigate, useRoutes } from 'react-router-dom'
import Login from "../Pages/Auth/Login"
import Signup from "../Pages/Auth/Signup"
import Home from '../Pages/Home/Home'
import AuthLayout from '../Layouts/AuthLayout'
import Products from '../Pages/Products'
import Product from '../Components/Product'
import Cart from '../Pages/Cart/Cart'
import OrderSteps from '../Pages/Cart/OrderSteps'
import Layout from '../Layouts/Layout'
import AboutPage from '../Pages/About'
import ContactPage from '../Pages/Contact'
import Notifications from '../Pages/Notifications'

const allRoutes = () =>{
    const token = true

    const publicRoutes = [
        {
            path :'/login',
            exact : true,
            element : !token ?  <AuthLayout children={<Login/>}/> : <Navigate to={'/'} />
        },
        {
            path :'/signup',
            exact : true,
            element : !token ?  <AuthLayout children={<Signup/>}/> : <Navigate to={'/'} />
        }
    ]
    const privateRoutes = [
        {
            path :'/',
            exact : true,
            element : token ? <Layout children={<Home />}/>  : <Navigate to={'/login'} />
        },
                {
            path :'/products',
            exact : true,
            element : token ? <Layout children={<Products/>}/>   : <Navigate to={'/login'} />
        },
        {
            path :'/product/:id',
            exact : true,
            element : token ? <Layout children={<Product/>}/>  : <Navigate to={'/login'} />
        },
        {
            path :'/cart',
            exact : true,
            element : token ?  <Layout children={<Cart/>}/> : <Navigate to={'/login'} />
        },
        {
            path :'/cart/status',
            exact : true,
            element : token ?  <Layout children={<OrderSteps/>}/> : <Navigate to={'/login'} />
        },
        {
            path :'/contact',
            exact : true,
            element : token ?  <Layout children={<ContactPage/>}/> : <Navigate to={'/login'} />
        },
        {
            path :'/about',
            exact : true,
            element : token ?  <Layout children={<AboutPage/>}/> : <Navigate to={'/login'} />
        },
        {
            path :'/notify',
            exact : true,
            element : token ?  <Layout children={<Notifications/>}/> : <Navigate to={'/login'} />
        }
    ]

    return [...publicRoutes,...privateRoutes]
}

export default function Routes(){
    const appRoutes = allRoutes()
    return useRoutes(appRoutes)
}