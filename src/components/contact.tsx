
const Contact = () => {
  return (
    <div>
      <div id="contact" className="w-4/5 flex mx-auto gap-40 items-start justify-between my-10">
        <div className="flex flex-col justify-start items-start gap-2 h-full">
          <div className="line h-0.5 w-1/2 bg-white"></div>
          <h2 className="text-2xl font-semibold text-gray-300 font-poppins hover:text-white cursor-pointer">
            Contact
          </h2>
        </div>
      </div>

      <div className="flex flex-col justify-between md:flex-row gap-10 w-4/5 mx-auto">
        <div className="w-1/2">
          <h4 className="text-xl font-semibold font-poppins text-gray-200">Let's Work Together</h4>
          <p className="text-sm font-poppins text-gray-400">I love working on projects that create real impact. As a developer, I am always excited to learn, collaborate, and build products that solve meaningful problems.
          </p>
          <p className="text-sm font-poppins text-gray-400">
            If you share the same passion, feel free to connect with me on my socials. I would love to chat or work together.</p>

        </div>
        <div className="w-1/2">
          <h4 className="text-xl font-semibold font-poppins text-gray-200">Connect with me</h4>
          <div className="flex gap-3 my-5 mx-auto">
            <a href="mailto:chetansahuwork@gmail.com" className="flex flex-col text-center hover:scale-110">
            <img className=" peer w-12 grayscale-50 hover:grayscale-0 hover:bg-transparent hover:border ease-in duration-150 p-2 rounded-lg bg-white/5" src="/images/communication.png" alt="Mail Icons" />
            <p className="text-sm font-semibold mt-2 text-gray-400 font-unbounded peer-hover:text-gray-200">Mail</p>

            </a>
            <a href="https://linkedin.com/in/chetansahu25" className="flex flex-col text-center hover:scale-110" target="_blank">
            <img className=" peer w-12 grayscale-50 hover:grayscale-0 hover:bg-transparent hover:border ease-in duration-150 p-2 rounded-lg bg-white/5" src="/images/linkedin.png" alt="Linkedin Icons" />
            <p className="text-sm font-semibold mt-2 text-gray-400 font-unbounded peer-hover:text-gray-200">LinkedIn</p>

            </a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Contact