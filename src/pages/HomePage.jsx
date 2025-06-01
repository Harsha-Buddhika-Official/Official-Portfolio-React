import Typing from '../components/TypingAni.jsx'

function HomePage(){
    return(
        <>
            <div className="flex flex-col items-center justify-center h-screen text-center" >
                <div >
                    <h1 className="mb-2 text-6xl font-extrabold text-white md:text-7xl lg:text-8xl drop-shadow-lg" style={{fontFamily: "arial"}}>Hi there...!</h1>
                    <p className="mt-4 mb-1 text-5xl font-bold md:text-6xl lg:text-7xl text-accent-400">I'm Harsha Buddhika</p>
                </div>
                <div className='p-4 my-5 text-center'>
                    <Typing/>
                </div>
                <div className="flex flex-col items-center justify-center gap-6 mt-5 sm:flex-row">
                    {/* cv link here */}
                    <a href="" 
                    className="relative py-4 overflow-hidden font-medium text-white rounded-lg shadow-lg group bg-accent-600 shadow-accent-900/20">
                    <span className="relative z-10 flex items-center justify-center">
                        Download CV
                        <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </span>
                    </a>
                    <button className="relative px-8 py-4 overflow-hidden font-medium transition-colors duration-300 bg-transparent border-2 rounded-lg shadow-lg cursor-pointer group border-accent-500 text-accent-400 hover:text-white shadow-accent-900/10">
                        <span className="relative z-10 flex items-center justify-center">
                            Contact Me
                        </span>
                    </button>
                </div>
            </div>
            {/* scroll down */}
            <div className="absolute flex flex-col items-center text-gray-400 transform -translate-x-1/2 bottom-8 left-1/2 animate-bounce ">
                <span className="mb-2 text-sm">Scroll Down</span>
                <span className="w-6 h-6 rotate-45 border-b-4 border-r-4 border-gray-400"></span>
            </div>
        </>
    )
}
export default HomePage;