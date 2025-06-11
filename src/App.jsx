import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import FlixtarLikeSPA from './pages/FlixtarSPA';
import Header from './components/Header';
import Footer from './components/Footer';
import Loader from './components/Loader';

function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    document.body.classList.add('overflow-hidden', 'loader-active');

    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setLoading(false);
        document.body.classList.remove('overflow-hidden', 'loader-active');
      }, 500);
    }, 1000);

    return () => {
      clearTimeout(timer);
      document.body.classList.remove('overflow-hidden', 'loader-active');
    };
  }, []);

  if (loading) {
    return <Loader fadeOut={fadeOut} />;
  }

  return (
    <div className="min-h-screen flex flex-col App">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<FlixtarLikeSPA />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;