
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
    <section className="px-16 py-8">
      <h2 className="text-2xl mb-8">
        <span className="text-[#560cc6]">Capstone and </span>Mini Projects
      </h2>
      <div className="space-y-12">
        {projects.map((project, index) => (
          <div key={index} className="flex justify-center items-center">
            <img
              className="h-48 w-[500px] rounded-[50px] object-cover"
              src={project.image}
              alt={project.title}
            />
            <div className="pl-12 max-w-2xl">
              <div className="text-xl mb-2">
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-[#6811ec] hover:underline">
                    {project.title}
                  </a>
                ) : (
                  <span className="text-[#6811ec]">{project.title}</span>
                )}
              </div>
              <p className="text-[#c8bdd8] leading-relaxed pt-2">
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
