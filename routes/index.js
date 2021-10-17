import auth from "../middlewares/auth";
import Home from "../src/pages/Home";
import Login from "../src/pages/Login";
import Edit from "../src/pages/user/Edit";

const routes = [
    {
        path: '/',
        component: Home,
        name: 'home',
        meta: {
            middleware: [
                auth
            ]
        }
    },{
        path: '/users/:id/edit',
        component: Edit,
        name: 'users.edit',
        meta: {
            middleware: [
                auth
            ]
        }
    },{
        path: '/login',
        component: Login,
        name: 'login'
    },
]

export default routes
