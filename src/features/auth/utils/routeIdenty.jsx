import { Navigate} from 'react-router-dom';

const auth = () => {

  const isAuthenticated = localStorage.getItem('token') !== null;
  return isAuthenticated;
};

const RouteIdenty = ({ element }) => {
  return !auth() ? (
        <>
            {
                element
            }
        </>  
  ) : (
    <Navigate to="/home" replace />
  );
};

export default RouteIdenty
