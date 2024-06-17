import { Provider } from 'react-redux'
import Navbar from './components/Navbar'
import { Header } from './sections'
import { PersistGate } from 'redux-persist/integration/react'
import { store } from './store'
import { persistor } from './store/store'

const App: React.FC = () => {

  return (
    <Provider store={store} >
      <PersistGate loading={null} persistor={persistor}>
        <main className='relative'>
          <Navbar />
          <Header />
        </main>
      </PersistGate>
    </Provider>
  )
}

export default App
