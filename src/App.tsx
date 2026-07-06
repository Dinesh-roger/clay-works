import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import { AppProvider } from './context/AppContext';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Process from './pages/Process/Process';
import Gallery from './pages/Gallery/Gallery';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';

const App: React.FC = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/process" element={<Process />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
};

export default App;
