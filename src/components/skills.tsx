import GlareHover from "./GlareHover";

interface Technology {
  name: string;
  imageSrc: string;
}

interface TechCategory {
  title: string;
  items: Technology[];
}

export const Technologies: TechCategory[] = [
  {
    title: "Frontend Technologies",
    items: [
      { name: "HTML", imageSrc: "/images/HTML5.svg" },
      { name: "CSS", imageSrc: "/images/CSS3.svg" },
      { name: "JavaScript", imageSrc: "/images/JavaScript.svg" },
      { name: "ReactJS", imageSrc: "/images/React.svg" },
      { name: "Next.js", imageSrc: "/images/Next.js.svg" },
      { name: "TailwindCSS", imageSrc: "/images/Tailwind-CSS.svg" },
    ],
  },
  {
    title: "Backend Technologies",
    items: [
      { name: "Node.js", imageSrc: "/images/Node.js.svg" },
      { name: "Express.js", imageSrc: "/images/Express.svg" },
      { name: "Nest.js", imageSrc: "/images/Nest.js.svg" },
      { name: "MongoDB", imageSrc: "/images/MongoDB.svg" },
      { name: "Mongoose", imageSrc: "/images/Mongoose.js.svg" },
      { name: "Nodemon", imageSrc: "/images/Nodemon.svg" },
      { name: "Prisma", imageSrc: "/images/prisma.svg" },
      { name: "JWT", imageSrc: "/images/jwt.svg" },
    ],
  },
  {
    title: "Other Tools & Platforms",
    items: [
      { name: "Git & GitHub", imageSrc: "/images/github-white.svg" },
      { name: "VS Code", imageSrc: "/images/VSCode.svg" },
      { name: "Postman", imageSrc: "/images/Postman.svg" },
      { name: "Vercel", imageSrc: "/images/Vercel.svg" },
    ],
  },
];

const Skills = () => {
  return (
    <div id="skills" className="text-white my-10">
      {/* Section Header */}
      <div className="w-4/5 flex mx-auto gap-40 items-start justify-between my-10">
        <div className="flex flex-col justify-start items-start gap-2 h-full">
          <div className="line h-0.5 w-1/2 bg-white"></div>
          <h2 className="text-2xl font-semibold text-gray-300 font-poppins hover:text-white cursor-pointer">
            Tools And Technologies
          </h2>
        </div>
      </div>

      {/* Categories */}
      <div className="flex flex-col gap-10 w-4/5 mx-auto">

        {Technologies.map((techCategory, index) => (

          <div key={index} className="flex flex-col lg:flex-row gap-15">
            <h3 className="text-lg font-meduim text-gray-500 mb-4 font-poppins hover:text-white transition-colors">
              {techCategory.title}
            </h3>

            {/* Tech Icons Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {techCategory.items.map((tech, i) => (
                <div key={i} className="bg-white/2 hover:bg-white/4 hover:scale-110 rounded-lg transition-all duration-200 cursor-pointer">
                  <GlareHover width="inherit" height="inherit" background="inherit" className="flex flex-col items-center justify-center gap-2   p-4">

                    <img
                      src={tech.imageSrc}
                      alt={tech.name}
                      className="w-10 h-10 object-contain"
                    />
                    <span className="text-sm font-poppins text-gray-300 hover:text-white">
                      {tech.name}
                    </span>
                  </GlareHover>
                </div>
                  
              ))}
          </div>
            </div>
        ))}
    </div>
    </div >
  );
};

export default Skills;
