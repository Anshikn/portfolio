import myImage from '../photos/gv.png';


const About = () => {
  return (

    <div className="flex justify-center flex-wrap items-center mt-10 md:min-h-screen px-4 md:px-16">
      {/* <div className='basis-full items-center justify-center flex '  >
        <img className="h-32 md:h-48   rounded-[30px] md:rounded-[50px] mb-6 md:mr-12 md:mb-0 " src={myImage} alt="Profile" />
      </div> */}


      <div className="max-w-4xl text-center">
        <h2 className="text-2xl md:text-4xl mb-6 md:mb-8">
          CI<span className="text-purple-500">AA</span>
        </h2>
        <p className="text-lg md:text-xl leading-relaxed mb-4 md:mb-6">
          I’m Muhammed Anshik N, an aspiring software developer with a Bachelor’s degree in Computer Applications (BCA) and a certification in MERN stack development. I specialize in both front-end and back-end development, working with technologies like HTML, CSS, JavaScript, PHP, Laravel, Python, and the MERN stack.
        </p>
        <p className="text-base md:text-lg leading-relaxed">
          With experience in web development, I enjoy working on projects that make a difference
          in people's lives. From ad space platforms to community websites, I'm always excited
          to take on new challenges and learn new technologies.
        </p>
      </div>
    </div >
  );
};


export default About
