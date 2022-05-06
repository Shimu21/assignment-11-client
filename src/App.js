import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Components/Pages/Home/Home/Home';
import About from './Components/Pages/About/About';
import NotFound from './Components/Pages/NotFound/NotFound';
import Blogs from './Components/Pages/Blogs/Blogs';
import Login from './Components/Pages/Auth/Login/Login';
import Register from './Components/Pages/Auth/Register/Register';
import Header from './Components/Shared/Header/Header';
import Footer from './Components/Shared/Footer/Footer';
import Inventory from './Components/Pages/Inventory/Inventory';
import RequireAuth from './Components/Pages/Auth/RequireAuth/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ManageInventories from './Components/Pages/ManageInventories/ManageInventories';


function App() {
  return (
    <div className='app'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/manageInventories' element={
          <RequireAuth>
            <ManageInventories></ManageInventories>
          </RequireAuth>
        }></Route>

        <Route path='/inventory/:id' element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        }></Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
}

export default App;
