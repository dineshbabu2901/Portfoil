import websiteImg1 from "../assects/shop.jpg";
import websiteImg2 from "../assects/food.jpg";
import websiteImg3 from "../assects/web.jpg";

export default function Projects() {
  const config = {
    projects: [
      {
        image: websiteImg1,
        description: "A Ecommerce Website. Built with React Js.",
        link: "",
      },
      {
        image: websiteImg2,
        description:
          "Food Ecommerce website like Swiggy, Built with React Js ",
        link: "",
      },
      {
        image: websiteImg3,
        description: "Basic Blog Website . Built with Reactjs and MongoDB",
        link: "",
      },
    ],
  };

  return (
    <section
      id="projects"
      className="flex  flex-col py-20 px-5 justify-center bg-primary text-white"
    >
      <div className="w-full">
        <div className="flex flex-col px-10 py-5">
          <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold">
            Projects
          </h1>
          <p>
            These are some of my best projects. I have built these with React,
            and CSS. Check them out.
          </p>
        </div>
      </div>
      <div className="w-full">
        <div className="flex flex-col md:flex-row px-10 gap-5">
          {config.projects.map((project, index) => (
            <div key={index} className="relative">
              <img
                className="h-[200px] w-[500px]"
                src={project.image}
                alt={project.description}
              />
              <div className="project-desc">
                <p className="text-center px-5 py-5">{project.description}</p>
                <div className="flex justify-center">
                  <a className="btn" target="_blank" href={project.link}>
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
