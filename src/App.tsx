import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { store } from './store';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Header, About, Experience, Projects, Contacts } from './sections';
import { persistor } from './store/store';
import AllProjects from './pages/AllProjects/AllProjects';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

const MainLayout: React.FC = () => (
    <main className='relative'>
        <Navbar />
        <Header />
        <About />
        <Experience />
        <Projects />
        <Contacts />
        <Footer />
    </main>
);

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Router>
                <ScrollToTop />
                    <Routes>
                        <Route path="/" element={<MainLayout />} />
                        <Route path="/all-projects" element={<AllProjects />} />
                    </Routes>
                </Router>
            </PersistGate>
        </Provider>
    );
};

export default App;
