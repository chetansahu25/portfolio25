
import TiltedCard from "./TiltedCard"

const About = () => {



    return (
        <div id="about">

        <div className="w-4/5 flex flex-col md:flex-row mx-auto gap-10 lg:gap-40 items-center md:items-start justify-between my-10">
            <div className="flex flex-col justify-start items-center md:items-start gap-2 h-full">
                <div className="line h-0.5 w-1/2 bg-white"></div>
                <h2 className="text-2xl font-semibold text-gray-300 font-poppins hover:text-white cursor-pointer">
                    About&nbsp;Me
                </h2>
            </div>

            <div className="content text-gray-400 leading-relaxed flex flex-col justify-start items-start h-full">
                <div className=" flex gap-4 border-gray-800 border-[1px] w-full h-full rounded-lg  mb-4 p-4">
                    <p className="font-unbounded tracking-wider text-md mb-4">
                        <div className="float-left pb-3 pr-5 pt-0">
                            <TiltedCard
                                imageSrc="/chetan1.jpg"
                                altText="Chetan Kumar Sahu"
                                showTooltip={false}
                                displayOverlayContent={false}
                                overlayContent={null}
                            />
                        </div>

                        Hey there! I'm <span className="hover:text-white ease-in-out duration-300">
                         Chetan Kumar Sahu
                            </span>, a Full Stack MERN Developer who loves bringing ideas to life through clean design and thoughtful code. For me, development isn't just about solving problems — it's about creating experiences that feel effortless and meaningful for the people who use them.
                        <br />

                        I enjoy working with the MERN stack — especially React on the frontend and Node.js/Express on the backend. Lately, I've been diving deeper into TypeScript, Next.js and Nest.js, sharpening my skills to build faster, scalable, and more robust web apps.
                        <br />

                        When I'm not coding, I'm usually brainstorming new startup ideas, sketching app interfaces, or managing my café — finding inspiration in the balance between tech and creativity.
                    </p>
                </div>
            </div>
        </div>

                                </div>
    )
}

export default About