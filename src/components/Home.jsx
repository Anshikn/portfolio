
import myImage from '../photos/gv.png';
const Home = () => {
  return (
    <div className="flex justify-center items-start min-h-screen px-4">
      <div className="flex flex-col md:flex-row items-center mt-12 md:mt-24 text-center md:text-left">
        <img
          className="h-32 md:h-48 rounded-[30px] md:rounded-[50px] mb-6 md:mr-12 md:mb-0"
          src={myImage}
          alt="Profile"
        />
        <div className="mt-0 md:mt-6">
          <span className="text-2xl md:text-4xl">
            Hey, I am Anshik<br />
            <div className="mt-2 md:mt-4">
              <h3 className="text-xl md:text-3xl bg-gradient-to-r from-purple-900 via-purple-600 via-pink-500 to-yellow-400 bg-clip-text text-transparent animate-pulse">
                Aspiring Software Developer
              </h3>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};


export default Home
