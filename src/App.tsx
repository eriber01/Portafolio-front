import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { useInitialActions } from './useInitialActions';
import Page404 from './pages/Page404';


function App() {

  useInitialActions()

  return (
    <div style={{/* backgroundColor: '#3C4048', */ color: '#EAEAEA' }}>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </div>
  )
}

export default App;
