export default function auth ({ next }){
    if(!localStorage.getItem('authToken')){
        return next({
            name: 'login'
        })
    }

    return next()
}
