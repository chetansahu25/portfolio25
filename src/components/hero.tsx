import { FiExternalLink, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import SplitText from "./SplitText";

const Hero = () => {
    return (
        <div className="flex flex-col items-center justify-center md:h-screen ">
            <h1 className="text-white text-7xl font-bold mt-20 text-center md:mt-10">
                Chetan Kumar Sahu
            </h1>
            <SplitText
                text="Full Stack MERN Developer"
                className="text-gray-400 text-3xl text-center mt-6 font-unbounded"
                delay={50}
                duration={0.4}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
            />
            <p className="text-gray-500 text-2xl text-center max-w-2xl mt-8 font-poppins">
                I build scalable, pixel-perfect web applications using the MERN
                stack. Passionate about creating seamless user experiences with
                modern technologies and robust backend architectures.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-2 md:space-x-4 mt-8">
                <Button
                    variant="outline"
                    size="lg"
                    className="text-black cursor-pointer hover:bg-gray-300"
                >
                    Get In Touch
                </Button>
                <Button
                    variant="default"
                    size="lg"
                    className="w-full sm:w-auto bg-gray-400/5 hover:bg-gray-400/20 border border-white/5"
                    asChild
                >
                    <a href="https://drive.google.com/file/d/1W6C1_32kiKBKJn2iy_pZQqHbr4AZRVR3/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                        View Resume
                        <FiExternalLink className="ml-2 h-4 w-4" />
                    </a>
                </Button>
            </div>
            <div className="flex space-x-6 mt-8">
                <a href="https://github.com/chetansahu25" target="_blank" rel="noopener noreferrer">
                    <FiGithub className="text-gray-400 hover:text-white cursor-pointer" size={30} />
                </a>
                <a href="https://www.linkedin.com/in/chetansahu25/" target="_blank" rel="noopener noreferrer">
                    <FiLinkedin className="text-gray-400 hover:text-white cursor-pointer" size={30}
                    />
                </a>
                <a href="mailto:chetansahuwork@gmail.com" target="_blank" rel="noopener noreferrer">
                    <FiMail className="text-gray-400 hover:text-white cursor-pointer" size={30} />
                </a>
            </div>
        </div>
    );
};

export default Hero;
