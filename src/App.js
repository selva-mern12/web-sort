import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';

import Header from './components/Header'
import Contact from './components/Contacts';
import Careers from './components/Careers';
import Service from './components/Service';
import Query from './components/Query';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import OpportunityIndication from './components/OpportunityIndication';
import Footer from './components/Footer';

const App = () => {
    const navigate = useNavigate();

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 108; // header height in px
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
            });
        }
    };

    return (
        <>
            <Header onNavClick={scrollToSection} navigate={navigate} />
            
            <Routes>
                <Route
                path="/"
                element={
                    <>
                    <div id="home"><Home /></div>
                    <div id="about"><About /></div>
                    <div id="projects"><Projects /></div>
                    <Query />
                    <OpportunityIndication />
                    <Footer />
                    </>
                }
                />
                <Route path="/services" element={<Service />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </>
    );
};

export default App
