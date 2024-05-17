import React from 'react';
import { About, Footer, Header, Skills, Testimonial, Work } from './container';
import { BrowserRouter, Route } from 'react-router-dom';
import { Navbar } from './components';
import { Box} from '@mui/material';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </>
    // <BrowserRouter>
    //   <Route>
    //   </Route>
    // </BrowserRouter>
  );
}

export default App;
