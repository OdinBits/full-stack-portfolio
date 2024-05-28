import React from 'react';
import { About, Footer, Header, SkillsExperience, Testimonial, Work } from './container';
import { BrowserRouter, Route } from 'react-router-dom';
import { Box, ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './store/store';
import { globalTheme } from './STYLGlobal';
import Navbar from './components/Navbar';

function App() {
  return (
    <Provider store={store} >
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={globalTheme}>
          <Navbar />
          <Header />
          <About />
          <Work />
          <SkillsExperience />
          <Testimonial />
          <Footer />
        </ThemeProvider>
      </PersistGate>
    </Provider>
    // <BrowserRouter>
    //   <Route>
    //   </Route>
    // </BrowserRouter>
  );
}

export default App;
