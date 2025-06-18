import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import FlixtarLikeSPA from "./pages/FlixtarSPA.jsx"
import Loader from "./components/Loader.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { Route,Routes } from 'react-router-dom';

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
      <Helmet>
        <title>Flixtar | Social Media Growth</title>
        <meta name="description" content="Flixtar is a growth agency helping startups & creators scale fast on Instagram & YouTube." />
      </Helmet>

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

