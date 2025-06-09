import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FlixtarLikeSPA from './FlixtarSPA';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<FlixtarLikeSPA />} />  
          {/* <Route path="/result" element={<ResultsSection />} />  
          <Route path="/yt" element={<YouTubeCarousel />} />  
          <Route path="/yt" element={<YouTubeCarousel />} />  
          <Route path="/videog" element={<VideoGrid />} />  
          <Route path="/testimonial" element={<Testimonials />} />   */}








        </Routes>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;