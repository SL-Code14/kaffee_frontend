
import './App.css';
// import About from './components/landingpage/about';
// import Card from './components/landingpage/card';
// import Home from './components/landingpage/home';
import Navbar from './components/landingpage/navbar';



import { BrowserRouter, Route, Routes} from 'react-router-dom';
// import Menu from './pages/menu';
import Homepage from './pages/homepage';
import Menu from './pages/menu';
import Yourorder from './pages/yourorder';
import BookTable from './pages/bookTable';
import Products from './pages/products';



function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Homepage/> */}
     
     
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/Yourorder' element={<Yourorder/>}/>
        <Route path='/BookYourTable' element={<BookTable/>}/>
        <Route path='/Product' element={<Products/>}/>
      </Routes>
      </BrowserRouter>

     


    
    </div>
  );
}

export default App;
