import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFeaturedProjects } from '../store/slices/projectSlice.js';
import Hero from '../components/Hero';
import ProjectSlider from '../components/ProjectSlider';

const Home = () => {
  const dispatch = useDispatch();
  const { featuredProjects, loading, error } = useSelector(
    (state) => state.projects
  );

  useEffect(() => {
    dispatch(fetchFeaturedProjects());
  }, [dispatch]);

  if (error) {
    return (
      <div className="text-center py-12 text-red-500">
        Error loading projects: {error.message || error}
      </div>
    );
  }

  return (
    <div className="pb-12">
      <Hero />
      
      <div className="container mx-auto px-4 py-12">
        {loading ? (
          <div className="text-center py-12">Loading featured projects...</div>
        ) : (
          <>
            <ProjectSlider 
              projects={featuredProjects} 
              title="Featured Projects" 
            />
            
            <ProjectSlider 
              projects={[...featuredProjects].reverse()} 
              title="Recent Work" 
            />
            
            <ProjectSlider 
              projects={[...featuredProjects].sort(() => 0.5 - Math.random())} 
              title="Popular Projects" 
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Home;