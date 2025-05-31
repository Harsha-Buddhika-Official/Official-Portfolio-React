import Typing from '../../components/TypingAni.jsx'

function HomePage(){
    return(
        <>
            <div className="flex flex-col items-center justify-center h-screen text-center" >
                <div >
                    <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-white mb-2 drop-shadow-lg" style={{fontFamily: "arial"}}>Hi there...!</h1>
                    <p className="text-5xl md:text-6xl lg:text-7xl font-bold mt-4 mb-1 text-accent-400">I'm Harsha Buddhika</p>
                </div>
                <div className='p-4 m-5 text-center'>
                    <Typing/>
                </div>
                <div className="mt-5 flex sm:flex-row flex-col items-center justify-center gap-6">
                    {/* cv link here */}
                    <a href="" 
                    className="group px-8 py-4 bg-accent-600 text-white font-medium rounded-lg relative overflow-hidden shadow-lg shadow-accent-900/20">
                    <span className="relative z-10 flex items-center justify-center">
                        Download CV
                        <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </span>
                    </a>
                    <button className="group px-8 py-4 border-2 border-accent-500 text-accent-400 font-medium rounded-lg relative overflow-hidden bg-transparent hover:text-white transition-colors duration-300 shadow-lg shadow-accent-900/10 cursor-pointer">
                        <span className="relative z-10 flex items-center justify-center">
                            Contact Me
                        </span>
                    </button>
                </div>
            </div>
            {/* scroll down */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-400 animate-bounce ">
                <span className="text-sm mb-2">Scroll Down</span>
                <span className="w-6 h-6 border-b-4 border-r-4 border-gray-400 rotate-45"></span>
            </div>
        </>
    )
}
export default HomePage;