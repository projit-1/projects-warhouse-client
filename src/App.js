
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './Pages/AboutUs/AboutUs';
import Blogs from './Pages/Blogs/Blogs';
import Contact from './Pages/Contact/Contact';
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import Inventories from './Pages/Inventories/Inventories';
import NotFound from './Pages/NotFound/NotFound';
import Privacy from './Pages/Privacy/Privacy';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import SignIn from './Pages/SignIn/EmailPasswordSignIn/Signin';
import SignUp from './Pages/SignUp/SignUp';
import TearmsAndCondation from './Pages/TearmsAndCondation/TearmsAndCondation';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={
          <RequireAuth>
            <Blogs></Blogs>
          </RequireAuth>
        }></Route>
        <Route path='/inventories' element={
          <RequireAuth>
            <Inventories></Inventories>
          </RequireAuth>
        }></Route>
        <Route path='/signin' element={<SignIn></SignIn>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/aboutus' element={<AboutUs></AboutUs>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/privacy' element={<Privacy></Privacy>}></Route>
        <Route path='/termsandcondation' element={<TearmsAndCondation></TearmsAndCondation>}></Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
