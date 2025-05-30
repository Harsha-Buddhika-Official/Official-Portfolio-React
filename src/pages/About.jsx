import pic from '../components/images/proPic.jpg'

function About() {
    return (
        <div className="flex md:flex-row flex-col justify-center items-center min-h-[300px] gap-5 mx-7">
            <div className="relative flex-shrink-0" style={{ width: 220, height: 220 }}>
                {/* Spinning border */}
                <div
                    className="absolute inset-0 rounded-full border-2 border-y-inherit border-gray-400 animate-[spin_2s_linear_infinite]"
                    style={{ zIndex: 1 }}
                ></div>
                {/* Static image */}
                <div className="absolute inset-2 rounded-full overflow-hidden " style={{ zIndex: 2 }}>
                    <img
                        src={pic}
                        alt="Profile"
                        className="rounded-full object-cover w-full h-full transition-transform duration-300 ease-in-out hover:scale-115 scale-105"
                        style={{ width: '120%', height: '120%' }}
                    />
                </div>
            </div>
            <div className="md:max-w-[900px] max-w-full p-6 flex flex-col justify-center md:text-left text-center items-start dark:text-gray-200">
            <h1 className="text-3xl font-bold mb-4 md:text-left text-center w-full"> About Me </h1>
                <p className="break-words leading-7 font-sans ">
                    I'm a versatile Computer Science undergraduate at Eastern University, Sri Lanka — a government university — focused on Full-Stack Development, Cybersecurity, and Game Development. My skill set spans Web Development, Java Programming, UI/UX Design, and Graphic Design, allowing me to craft complete, visually engaging, and technically sound solutions.<br />
                    <br />
                    I don’t just separate design, development, and infrastructure — I bring them together. Whether it’s building responsive web interfaces, developing secure backend systems, or creating immersive game experiences, I aim to bridge creativity with functionality. My projects reflect a full-stack mindset, supported by strong cybersecurity awareness and a passion for clean, user-centric design.
                </p>
                <div className="mt-10 flex flex-wrap gap-3 justify-center lg:justify-start">
                    <span className="px-4 py-2 bg-gradient-to-r from-primary-50 to-primary-100 dark:from-gray-800 dark:to-gray-700 rounded-full text-sm font-medium text-primary-800 dark:text-primary-300 shadow-sm">UI/UX Designer</span>
                    <span className="px-4 py-2 bg-gradient-to-r from-accent-50 to-accent-100 dark:from-gray-800 dark:to-gray-700 rounded-full text-sm font-medium text-accent-800 dark:text-accent-300 shadow-sm">Full Stack Developer</span>
                    <span className="px-4 py-2 bg-gradient-to-r from-purple-50 to-purple-100 dark:from-gray-800 dark:to-gray-700 rounded-full text-sm font-medium text-purple-800 dark:text-purple-300 shadow-sm">Cyber Security Specialist</span>
                    <span className="px-4 py-2 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-700 rounded-full text-sm font-medium text-blue-800 dark:text-blue-300 shadow-sm">Web Developer</span>
                </div>
            </div>
        </div>
    );
}
export default About;