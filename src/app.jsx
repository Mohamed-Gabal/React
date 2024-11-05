

import './app.css'
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/about/About'
import Shop from './pages/Shop';
import Fake from './pages/fake/Fake';
import FakeDetails from './pages/fake/FakeDetails';
import Contact from './pages/contact/Contact';
import Cart from './pages/cart/Cart';
import { useState } from 'preact/hooks';
import Watchlist from './pages/watchlist/Watchlist';
import Swal from 'sweetalert2';



 export function App() {

  let [cartItems, setcartItems] = useState([]);
  let [watchlist, setwatchlist] = useState([]);
  let [dark, setdark] = useState(false);


  function changeTheam() {
    setdark(!dark);
  }


  function addToCart(product) {
    let selectedProduct = cartItems.find(item => item.id == product.id)

    if(selectedProduct) {
      setcartItems(cartItems.map(item => item.id == product.id ? 
        {...selectedProduct, qty : selectedProduct.qty + 1} :item
      ))
    } 
    else {
      setcartItems([...cartItems, {...product, qty : 1}])
      Swal.fire({
        title: "This Product Already Added in The Cart Successfully",
        icon: "success",
        showConfirmButton: false,
        timer: 2000
      });
    }
  }


  function removeFromCart(product) {
    setcartItems(cartItems.filter(item => item.id != product.id))
    Swal.fire({
      title: "This Product Already Removed From The Cart ",
      icon: "success",
      showConfirmButton: false,
      timer: 2000
    });
  }


  function addToWatchlist(product) {
    setwatchlist([...watchlist, product])
    Swal.fire({
      title: "This Product Already Added in The Cart WatchList",
      icon: "success",
      showConfirmButton: false,
      timer: 2000
    });
  }

  function removeFromWatchList(product) {
    setwatchlist(watchlist.filter(item => item.id != product.id))
    Swal.fire({
      title: "This Product Already Removed From The WatchList ",
      icon: "success",
      showConfirmButton: false,
      timer: 2000
    });
  }


  function dicrementProduct(product) {
    let selectProduct = cartItems.find(item => item.id == product.id);

    if(selectProduct.qty == 1) {
      setcartItems(cartItems.filter(item => item.id != product.id))
      Swal.fire({
        title: "This Product Already Removed From The WatchList ",
        icon: "success",
        showConfirmButton: false,
        timer: 2000
      });
    } else {
      setcartItems(cartItems.map(item => item.id == product.id ? 
        {...selectProduct, qty : selectProduct.qty -1} : item
      ))
    }
  }





  return (
   <div className={dark ? 'app-dark' : 'app'}>
        <BrowserRouter>
        <Navbar cartItems = {cartItems} watchlist = {watchlist} dark = {dark} changeTheam = {changeTheam}/> 
        <Routes > 
          <Route path='/' element = {<Home addToWatchlist={addToWatchlist} addToCart= {addToCart}/>} />
          <Route path='/about' element = {<About />} />
          <Route path='/shop' element = {<Shop />} />
          <Route path='/contact' element = {<Contact />} />
          <Route path='/fake' element = {<Fake addToCart={addToCart} addToWatchlist= {addToWatchlist}/>} />
          <Route path='/cart' element = {<Cart cartItems={cartItems} addToCart= {addToCart} 
            removeFromCart= {removeFromCart} dicrementProduct= {dicrementProduct}/>} />
          <Route path='/fakeDetails/:id' element = {<FakeDetails addToCart= {addToCart}/>} />
          <Route path='/watchlist' element = {<Watchlist watchlist= {watchlist}  addToCart={addToCart} removeFromWatchList= {removeFromWatchList}/>} />
          </Routes>
          <Footer />
        </BrowserRouter>
   </div>
  );
}

export default App;



