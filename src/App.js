import './App.scss';
// react router v6
import {BrowserRouter, Routes, Route} from 'react-router-dom';
// pages
import {Home, CategoryProduct, ProductSingle, Cart, Search} from "./pages/index";
// components
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import store from "./pages/store/store";
import {Provider} from "react-redux";
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

function App() {

  return (
    <div className="App">
      <Provider store = {store}>
        <BrowserRouter>
          <Header />
          <Sidebar />
          <Routes>
            {/* home page route */}
            <Route path = "/" element = {<Home />} />
            {/* single product route */}
            <Route path = "/product/:id" element = {<ProductSingle />} />
            {/* category wise product listing route */}
            <Route path = "/category/:category" element = {<CategoryProduct />} />
            {/* login page route */}
            <Route path = "/Login" element = {<Login/>}/>
            {/* register page route */}
            <Route path = "/Register" element = {<Register/>}/>
            {/* cart */}
            <Route path = "/cart" element = {<Cart />} />
            {/* searched products */}
            <Route path = "/search/:searchTerm" element = {<Search />} />
          </Routes>

          <Footer />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
