import { CssBaseline, ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store } from '../store';
import { persistor } from '../store/store';
import { theme } from './globalStyle';
import { Navbar } from '../components';
import { BrowserRouter } from 'react-router-dom';
import { About, Header, Projects, SkillsExperience } from '../pages';

const App: React.FC = () => {
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
            <Projects/>
          </BrowserRouter>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
