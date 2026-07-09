import { useEffect } from 'react';
import Navbar from './Navbar.jsx';
import Hero from './Hero.jsx';
import About from './About.jsx';
import TechStack from './TechStack.jsx';
import Experience from './Experience.jsx';
import Certificates from './Certificates.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';
import Footer from './Footer.jsx';
import ThreeScene from './ThreeScene.jsx';

const Portfolio = () => {
    useEffect(() => {
        const handleAnchorClick = (e) => {
            const href = e.currentTarget.getAttribute('href');
            if (href?.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offset = 80;
                    const bodyRect = document.body.getBoundingClientRect().top;
                    const elementRect = target.getBoundingClientRect().top;
                    const elementPosition = elementRect - bodyRect;
                    const offsetPosition = elementPosition - offset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        };

        const anchors = document.querySelectorAll('a[href^="#"]');
        anchors.forEach(anchor => {
            anchor.addEventListener('click', handleAnchorClick);
        });

        return () => {
            anchors.forEach(anchor => {
                anchor.removeEventListener('click', handleAnchorClick);
            });
        };
    }, []);

    return (
        <div className="min-h-screen selection:bg-purple-500/30 selection:text-purple-300 bg-transparent relative">
            <ThreeScene />
            <Navbar />
            <main className="transition-colors duration-300 relative z-10">
                <Hero />
                <About />
                <TechStack />
                <Experience />
                <Certificates />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default Portfolio;
