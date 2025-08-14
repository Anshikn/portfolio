
import myimage1 from '../photos/hobo.png'
import myimage2 from '../photos/finearts.png'
import myimage3 from '../photos/codingclub.png'

const Works = () => {
  const projects = [
    {
      title: "HOBO-COLLEGE PROJECT",
      image: myimage1,
      description: "Hobo is a platform that offers ad space renting services, allowing businesses to advertise their products on available physical or digital spaces. Through an easy-to-use interface, advertisers can book slots, and space owners can earn revenue by listing their locations for ads—making Hobo a smart bridge between ad seekers and space providers.",
      link: null
    },
    {
      title: "CODING CLUB",
      image: myimage3,
      description: "Coding Club is a student-led club created to motivate college students and bridge the gap between academics and the tech industry. It offers training to help students excel in real-world skills. The official website was designed and developed by me using HTML, CSS, and JavaScript.",
      link: "https://codingclubjdt.in/"
    },
    {
      title: "COLLEGE FINE ARTS RESULTS",
      image: myimage2,
      description: "Developed a static website to display the results of Fine Arts events, making it easy for students and faculty to view results online. The site was built using HTML, CSS, and JavaScript for a simple and responsive user experience.",
      link: "https://anshikn.github.io/finearts/"
    }
  ];

  return (
    <section className="px-4 md:px-16 py-8">
      <h2 className="text-xl md:text-2xl mb-6 md:mb-8 text-center md:text-left">
        <span className="text-purple-500">Capstone and </span>Mini Projects
      </h2>
      <div className="space-y-8 md:space-y-12">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col md:flex-row justify-center items-center">
            <img
              className="h-32 w-full max-w-md md:h-48 md:w-[500px] rounded-[30px] md:rounded-[50px] object-cover mb-4 md:mb-0"
              src={project.image}
              alt={project.title}
            />
            <div className="md:pl-12 max-w-2xl text-center md:text-left px-4 md:px-0">
              <div className="text-lg md:text-xl mb-2">
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">
                    {project.title}
                  </a>
                ) : (
                  <span className="text-purple-400">{project.title}</span>
                )}
              </div>
              <p className="text-purple-200 leading-relaxed pt-2 text-sm md:text-base">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works
