import { Navigate, useRoutes } from 'react-router-dom'
import Login from "../Pages/Auth/Login"
import Signup from "../Pages/Auth/Signup"
import Home from '../Pages/Home/Home'
import AuthLayout from '../Layouts/AuthLayout'
import Products from '../Pages/Products'
import Product from '../Components/Product'
import Cart from '../Pages/Cart/Cart'
import OrderSteps from '../Pages/Cart/OrderSteps'

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
            element : token ?  <Home /> : <Navigate to={'/login'} />
        },
                {
            path :'/products',
            exact : true,
            element : token ?  <Products/> : <Navigate to={'/login'} />
        },
        {
            path :'/product/:id',
            exact : true,
            element : token ?  <Product /> : <Navigate to={'/login'} />
        },
        {
            path :'/cart',
            exact : true,
            element : token ?  <Cart /> : <Navigate to={'/login'} />
        },
        {
            path :'/cart/status',
            exact : true,
            element : token ?  <OrderSteps /> : <Navigate to={'/login'} />
        }
    ]

    return [...publicRoutes,...privateRoutes]
}

export default function Routes(){
    const appRoutes = allRoutes()
    return useRoutes(appRoutes)
}