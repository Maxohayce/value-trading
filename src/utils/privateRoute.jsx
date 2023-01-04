import { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';

const PrivateRoute = ({children, ...rest}) => {
    let {authToken} = useContext(AuthContext)

    return(
        !authToken ? <Outlet /> : <Navigate to="/login" />
    )
}

export default PrivateRoute;