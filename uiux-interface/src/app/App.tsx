import { CssBaseline, ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store } from '../store';
import { persistor } from '../store/store';
import { Header } from '../pages';
import { theme } from './globalStyle';
import About from '../pages/About';
import { Navbar } from '../components';
import SkillsExperience from '../pages/SkillsExperience';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <Provider store={store} >
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <CssBaseline />
            <Navbar />
            <Header />
            <About />
            <SkillsExperience />
          </BrowserRouter>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
