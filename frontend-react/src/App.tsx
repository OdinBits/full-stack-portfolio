import React from 'react';
import { About, Contact, Footer, Header, SkillsExperience, Testimonial, Work } from './pages';
import { BrowserRouter, Route } from 'react-router-dom';
import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './store/store';
import { globalTheme } from './styleGlobal';
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
          {/* <Testimonial /> */}
          <Contact />
          <Footer/>
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
