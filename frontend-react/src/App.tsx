import { About, Contact, Footer, Header, SkillsExperience, Work } from './pages';
import {  ThemeProvider } from '@mui/material';
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
          <Contact />
          <Footer/>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
