import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginView from './features/login';
import HomeView from './features/home/HomeView';
import RouteAuth from './features/auth/utils/routeAuth';
import RouteIdenty from './features/auth/utils/routeIdenty';
import RegisterView from './features/register';
function App() {

  console.log(import.meta.env.VITE_EXAMPLE)
  return (
    <>
      <Router>
  
  <Routes>
    <Route path="/" element={<RouteIdenty element={<LoginView/>}/>} />
    <Route path="/register" element = {<RouteIdenty element={<RegisterView/>}/>}/>
    <Route path="/home" element = {<RouteAuth element={<HomeView/>}/>}/>
  </Routes>

</Router>
    </>
  )
}

export default App
