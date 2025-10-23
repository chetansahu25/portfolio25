import { FiExternalLink, FiGithub } from "react-icons/fi"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "./ui/button"
import PillText from "./PillText"


const projects = [
  {
    title: "EasyJmp - URL Shortner",
    description:
      "Full-stack project built with MERN stack. Features include user authentication, URL Shortening, Click Tracking and Analytics and admin dashboard.",
    image: "/easyjmp.png",
    technologies: ["React", "Node.js", "MongoDB", "Express", "JWT"],
    github: "https://github.com/chetansahu25/easyjmp",
    demo: "https://easyjmpto.vercel.app",
    featured: true,
  },
  {
    title: "Drag and Drop Issue Tracker",
    description:
      "Collaborative issue tracker application with real-time updates. Built with React, Node.js, Express.js and MongoDB for tracking issues It has drag and drop feature to instantly change issue status.",
    image: "/issue-tracker.png",
    technologies: ["React", "Node.js", "MongoDB", "Mongoose" ],
    github: "https://github.com/chetansahu25/issue-tracker",
    demo: "https://issue-tracker-fawn-theta.vercel.app/",
    featured: true,
  },
  {
    title: "VR Build Tools Landing Page",
    description:
      "A sleek, interactive landing page that showcases a modern digital experience with strong visuals and smooth transitions. The design focuses on clarity and engagement, guiding users seamlessly toward the core value proposition.",
    image: "/virtualR.png",
    technologies: ["React", "Tailwind CSS"],
    github: "https://github.com/chetansahu25/virtualr",
    demo: "https://virtual-r-kohl.vercel.app/",
    featured: false,
  },
  {
    title: " Quiz Builder App",
    description:
      "A clean, wrap-up quiz builder interface that prioritises ease and user focus. Rapidly get into the action with minimal distractions — the design leads straight to quiz-creation and interaction.",
    image: "/quiz-builder.png",
    technologies: ["React", "TypeScript", "Lovable", "Tailwind CSS", "Radix UI"],
    github: "https://github.com/chetansahu25/quiz-builder",
    demo: "https://quiz-builder-beige.vercel.app/",
    featured: false,
  },

]

const Project = () => {
  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)
  return (
    <div id="projects" className="text-white my-10">
      {/* Section Header */}
      <div className="w-4/5 flex mx-auto gap-40 items-start justify-between my-10">
        <div className="flex flex-col justify-start items-start gap-2 h-full">
          <div className="line h-0.5 w-1/2 bg-white"></div>
          <h2 className="text-2xl font-semibold text-gray-300 font-poppins hover:text-white cursor-pointer">
            Projects
          </h2>
        </div>
      </div>

      {/* projects list */}
      <div className="mb-20 w-4/5 mx-auto">
          <h3 className="text-2xl font-semibold text-white mb-8">Featured Work</h3>
          <div className="space-y-16">
            {featuredProjects.map((project, index) => (
              <div key={index} className="group">
                <div
                  className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <div className="relative overflow-hidden rounded-lg bg-card border border-border group-hover:border-white/50 transition-colors">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>

                  <div className={`${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                    <div className="space-y-4">
                      <h4 className="text-2xl font-semibold text-white group-hover:text-white transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-white leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <PillText index={index} item={tech} />
                        ))}
                      </div>
                      <div className="flex gap-4 pt-2">
                        <Button variant="default" size="sm" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <FiGithub className="h-4 w-4 mr-2" />
                            Code
                          </a>
                        </Button>
                        <Button size="sm" asChild>
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <FiExternalLink className="h-4 w-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div className="mx-5">
          <h3 className="text-2xl font-semibold text-gray-300 mb-8">Other Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {otherProjects.map((project, index) => (
              <Card key={index} className="group border-gray-700 hover:border-gray-200 bg-transparent">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-white/80 mb-2 group-hover:text-white transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-sm text-gray-500 leading-relaxed mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span key={tech} className="px-2 py-1 text-xs font-medium bg-gray-500/10 text-gray-500 rounded">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 text-xs font-medium text-gray-600">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <Button variant="default" size="sm" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <FiGithub className="h-3 w-3" />
                        </a>
                      </Button>
                      <Button size="sm"  variant="outline" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <FiExternalLink className="h-3 w-3" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
      </div>
    </div >
  )
}

export default Project