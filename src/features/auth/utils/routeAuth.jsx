import { Route, Navigate} from 'react-router-dom';

const auth = () => {

  const isAuthenticated = localStorage.getItem('token') !== null;
  return isAuthenticated;
};

const RouteAuth= ({ element }) => {
  return auth() ? (
        <>
            {
                element
            }
        </>  
  ) : (
    <Navigate to="/" replace />
  );
};

export default RouteAuth

