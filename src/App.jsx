import { useState, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Portfolio from './components/Portfolio.jsx';
import LoadingScreen from './components/LoadingScreen.jsx';
import SEO from './components/SEO.jsx';

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadingTimer = setTimeout(() => {
            setIsLoading(false);
        }, 5000);
        return () => clearTimeout(loadingTimer);
    }, []);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            document.documentElement.classList.remove('dark');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
    }, []);

    return (
        <HelmetProvider>
            <SEO />
            {isLoading ? <LoadingScreen /> : <Portfolio />}
        </HelmetProvider>
    );
}

export default App;
