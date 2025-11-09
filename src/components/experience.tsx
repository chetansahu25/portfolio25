


const Experience = () => {
    return (
        <div id="experience">
            <div className="w-4/5 flex mx-auto gap-40 items-start justify-between my-10">
                <div className="flex flex-col justify-start items-start gap-2 h-full">
                    <div className="line h-0.5 w-1/2 bg-white"></div>
                    <h2 className="text-2xl font-semibold text-gray-300 font-poppins hover:text-white cursor-pointer">
                        Experience
                    </h2>
                </div>
            </div>

            <div className="w-4/5 flex mx-auto gap-20 items-start justify-between my-10">
                <div className="flex w-full flex-col justify-start  items-start gap-2 h-full">
                    <p className="text-sm text-gray-400 font-poppins hover:text-white cursor-pointer">
                        08/2024&nbsp;-&nbsp;10/2024
                    </p>
                </div>
                <div>
                    <h3 className="font-medium text-2xl font-poppins">Frontend Developer, Next.js</h3>
                    <p className="text-lg font-poppins text-white/15">Mealobox Foodtech</p>
                    <p className="">
                        Developed and maintained the frontend of the customer web application using React ensuring a seamless user
                        experience.
                        Integrated NextUI and React-admin UI library to streamline both customer and vendor web-apps, focusing on
                        delivering a seamless, engaging experience.
                        Leveraged geolocation services through a Geocoding API to fetch user locations, providing nearby restaurant
                        recommendations and enhancing search result relevance based on user proximity.
                    </p>
                    <div className="flex flex-wrap my-5 gap-x-1">
                        {
                            ["HTML/CSS", "JavaScript", "React.js", "Next.js", "Tailwind CSS", "React-admin UI", "Git/Github"].map((item, index) => {
                                return (
                                    <p key={index} className="border-1 border-transparent font-poppins text-white/20 text-xs bg-white/5 py-1  my-1 px-5 rounded-full"> {item}</p>

                                )
                            })
                        }

                    </div>
                </div>
            </div >
            <div className="w-4/5 flex mx-auto gap-20 items-start justify-between my-10">
                <div className="flex w-full flex-col justify-start  items-start gap-2 h-full">
                    <p className="text-sm text-gray-400 font-poppins hover:text-white cursor-pointer">
                        11/2025&nbsp;-&nbsp;Present
                    </p>
                </div>
                <div>
                    <h3 className="font-medium text-2xl font-poppins">QA Engineer Intern</h3>
                    <p className="text-lg font-poppins text-white/15">Knot Dating</p>
                    <p className="">
                        Designed and executed manual test cases for new features across the web and mobile app.

                        Reported and tracked bugs and UI/UX inconsistencies using Trello.

                        Collaborated with developers and product managers to reproduce issues and verify fixes.

                        Contributed to the creation of test documentation and checklists.

                        Learned basics of automation testing with tools like Postman,
                    </p>
                    <div className="flex flex-wrap my-5 gap-x-1">
                        {
                            ["Trello", "Postman", "Git/Github"].map((item, index) => {
                                return (
                                    <p key={index} className="border-1 border-transparent font-poppins text-white/20 text-xs bg-white/5 py-1  my-1 px-5 rounded-full"> {item}</p>

                                )
                            })
                        }

                    </div>
                </div>
            </div >
        </div>


    )
}

export default Experience