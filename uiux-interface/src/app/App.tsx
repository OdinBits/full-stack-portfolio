import { ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store } from '../store';
import { persistor } from '../store/store';
import Master from '../master';
import { Header } from '../pages';
import { theme } from './globalStyle';
import About from '../pages/About';

function App() {
  return (
    <Provider store={store} >
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <Master>
            <Header/>
            <About/>
          </Master>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
