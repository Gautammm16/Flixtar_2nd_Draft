import { FourSquare } from 'react-loading-indicators';

const Loader = ({ fadeOut }) => {
  return (
    <div className={`fixed inset-0 flex items-center justify-center bg-transparant  transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
      <FourSquare 
        color={["#696998", "#7878AD", "#8787C2", "#9696D7"]}
        size="medium"
        
      />
    </div>
  );
};

export default Loader;