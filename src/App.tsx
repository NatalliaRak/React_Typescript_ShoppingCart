import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Pages/Home';
import Store from './Pages/Store';
import About from './Pages/About';
import  ShoppingCartProvider from './Context/ShoppingCartContext';


function App() {


  return (
    <ShoppingCartProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="store" element={<Store />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </ShoppingCartProvider>
  )
}

export default App
