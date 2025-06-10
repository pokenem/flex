import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import { ServiceProvider } from './context/ServiceContext';
import Terms from './pages/Terms';
import Career from "./pages/Career";
import JobDetails from "./components/JobDetails";

const App: React.FC = () => (
    <ServiceProvider>
        <div className="app-layout">
            <Header />
            <main className="app-main">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/contact-us" element={<ContactUs />} />
                    <Route path="/terms" element={<Terms />} />
                    <Route path="/jobs" element={<Career />} />
                    <Route path="/jobs/:slug" element={<JobDetails />} />
                </Routes>
            </main>
            <Footer />
        </div>
    </ServiceProvider>
);

export default App;
