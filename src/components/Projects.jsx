import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Logitech",
      description:
        "A live Geolocation app for finding tweets and twitter users around you.",
      photo: "/src/assets/projects/laptop.png",
      link:"https://www.figma.com/community/file/1276916698782751465/DELL%2FSELL",
    },
    {
      title: "Nike Air Jordan",
      description:
        "A video streaming app with live Geolocation, for streaming events.",
      photo: "/src/assets/projects/shoe_brand.png",
      link:"https://www.figma.com/community/file/1277149480538385398/NIKE-AIR-JORDAN",
    },
    {
      title: "Toggle-Day/Night",
      description:
        "Mobile app for booking instant pickup & dropoff accross major cities.",
      photo: "/src/assets/projects/toggle_day_night.png",
      link:"https://www.figma.com/community/file/1277566729467769285/ON%2FOFF-TOGGLE",
    },
  ];
  return (
    <div className="md:px-10 px-7 my-8" id="projects">
      <h1 className="text-primary font-semibold text-3xl mt-16">
        Featured projects:
      </h1>
      <p className="my-3 text-white md:w-3/4 leading-[2]">
        I have worked on many projects over the course of being a Web Developer,
        here are a few of my live, real-world projects
      </p>
      {/* featured projects */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 my-6 items-center justify-center">
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              className="flex flex-col shadow-sm md:w-[343px] bg-[#31313F] p-4 rounded"
            >
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="mb-4"
              >
                <img src={project.photo} alt={project.title} />
              </a>
              <h3 className="text-primary font-semibold text-lg">
                {project.title}
              </h3>
              <p className=" text-white mt-1">{project.description}</p>
              <div className="mt-5">
              <a href="https://www.figma.com/@Fixgma" target="_blank" rel="noopener noreferrer">
                <button className="btn transition-all duration-500 bg-primary py-2 px-6 rounded text-white hover:bg-white hover:text-primary">
                  About me
                </button>
                <button className="btn outline py-1.5 px-9 rounded border-none ml-5 text-white ">
                  Projects
                </button>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
