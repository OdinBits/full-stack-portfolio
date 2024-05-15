import React from 'react';
import { About, Footer, Header, Skills, Testimonial, Work } from './container';
import { BrowserRouter, Route } from 'react-router-dom';
import { Navbar } from './components';
import { Grid } from '@mui/material';

function App() {
  return (
    <Grid container>
      <Grid item xs={12} >
        <Navbar />
        <Header />
        {/* <About /> */}
        <Work />
        <Skills />
        <Testimonial />
        <Footer />
      </Grid>
    </Grid>
    // <BrowserRouter>
    //   <Route>
    //   </Route>
    // </BrowserRouter>
  );
}

export default App;
