import { FiExternalLink } from "react-icons/fi"
interface experienceData {
    duration: string
    companyName: string
    companyWebsite: string
    role: string
    skillsApplied: string[]
    jobDescription: string

}

const experience: experienceData[] = [
    {
        duration: "03/2026 - Present",
        companyName: "Knot Dating",
        companyWebsite: "https://knot.dating",
        role: "Software Engineer",
        skillsApplied: ["Node.js", "TypeScript", "MongoDB", "MySQL", "Postman", "Git", "Slack Webhooks", "Cron Jobs"],
        jobDescription: `Reduced application crash rate from 4% to 1% while achieving zero ANR incidents through performance optimizations and stability improvements.
        Built and launched an OTA(Over- the - Air) update system, enabling faster releases and a seamless user experience.
        Owned the end - to - end release process across Android, iOS, and Web platforms, ensuring reliable deployments.
        Developed backend services, APIs, and automation workflows, including cron jobs for user lifecycle management.
        Implemented Slack webhook integrations for real - time deployment and system notifications.Collaborated closely with cross - functional teams to deliver features, resolve production issues, and maintain platform reliability.`
    },
    {
        duration: "11/2025 - 02/2026",
        companyName: "Knot Dating",
        companyWebsite: "https://knot.dating",
        role: "QA Engineer Intern",
        skillsApplied: ["Trello", "Postman", "Jest"],
        jobDescription: `Designed and executed manual test cases for new features across the web and mobile app.

                        Reported and tracked bugs and UI/UX inconsistencies using Trello.

                        Collaborated with developers and product managers to reproduce issues and verify fixes.

                        Contributed to the creation of test documentation and checklists.

                        Learned basics of automation testing with tools like Postman`
    },
    {
        duration: "08/2024 - 10/2024",
        companyName: "Mealobox Foodtech",
        companyWebsite: "https://mealobox.in",
        role: "Fronted Developer Intern",
        skillsApplied: ["HTML/CSS", "JavaScript", "React.js", "Next.js", "Tailwind CSS", "React-admin UI", "Git/Github"],
        jobDescription: `Developed and maintained the frontend of the customer web application using React ensuring a seamless user experience.
        Integrated NextUI and React-admin UI library to streamline both customer and vendor web-apps, focusing on delivering a seamless, engaging experience.
        Leveraged geolocation services through a Geocoding API to fetch user locations, providing nearby restaurant recommendations and enhancing search result relevance based on user proximity.`
    },

]

const Experience = () => {
    console.log(experience)
    return (
        <div id="experience">
            <div className="w-4/5 flex flex-col sm:flex-row mx-auto gap-10 lg:gap-40 items-center sm:items-start justify-between my-10">
                <div className="flex flex-col justify-start items-center sm:items-start gap-2 h-full">
                    <div className="line h-0.5 w-1/2 bg-white"></div>
                    <h2 className="text-2xl font-semibold text-gray-300 font-poppins hover:text-white cursor-pointer">
                        Experience
                    </h2>
                </div>
            </div>
            <div className=" w-full sm:w-4/5 flex flex-col mx-auto gap-20 justify-between my-10">
                {
                    experience.map((work, index) => {
                        return (
                            <div key={index} className="w-full flex flex-col text-center sm:text-start sm:flex-row justify-between">
                                <p className=" text-sm text-gray-400 font-poppins hover:text-white py-2">{work.duration}</p>
                                <div className=" sm:w-5/7 px-8 sm:px-0">
                                    <h3 className="font-medium text-2xl text-white font-poppins">{work.role}</h3>
                                    <a className="flex justify-center sm:justify-normal  items-center gap-2 text-lg text-white/45 font-poppins hover:underline hover:text-white transition-all" href={work.companyWebsite} target="_blank">{work.companyName} <FiExternalLink /></a>
                                    <p className=" font-poppins text-sm ">{work.jobDescription}</p>
                                    <div className="flex flex-wrap justify-center sm:justify-normal pt-5 gap-x-1">
                                        {work.skillsApplied.map((skill, index) => {
                                            return (
                                                <span key={index} className="border-1 border-transparent font-poppins text-white/45 text-xs bg-white/5 py-1.5 my-1 px-5 rounded-full">{skill}</span>
                                            )
                                        })}
                                    </div>
                                </div>

                            </div>
                        )
                    })
                }
            </div>
        </div>


    )
}

export default Experience