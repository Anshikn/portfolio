

function Home() {

  return (
    <div className="flex justify-center items-start min-h-screen">
      <div className="flex items-center mt-24">
        <img
          className="h-48 rounded-[50px] mr-12"
          src="https://via.placeholder.com/200x200/560cc6/ffffff?text=Anshik"
          alt="Profile"
        />
        <div className="mt-6">
          <span className="text-4xl">
            Hey, I am Anshik<br />
            <div className="mt-4">
              <h3 className="text-3xl bg-gradient-to-r from-purple-900 via-purple-600 via-pink-500 to-yellow-400 bg-clip-text text-transparent animate-pulse">
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
