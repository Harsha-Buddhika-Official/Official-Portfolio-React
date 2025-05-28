import Typing from '../../components/TypingAni.jsx'

function HomePage(){
    return(
        <>
            <div className="flex flex-col items-center justify-center h-screen text-center" style={{fontFamily: "'Fira Code', monospace"}}>
                <div >
                    <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-white mb-2 drop-shadow-lg" style={{fontFamily: "arial"}}>Hi there...!</h1>
                    <p className="text-5xl md:text-6xl lg:text-7xl font-bold mt-4 mb-1 text-accent-400">I'm Harsha Buddhika</p>
                </div>
                <div className='p-4 m-5 text-center'>
                    <Typing/>
                </div>
                <div className="mt-5 flex sm:flex-row flex-col items-center justify-center gap-6">
                    <a href="https://storage.rxresu.me/cm7msdjjb3at21492ka4bii2s/resumes/intern-software-engineer.pdf" 
                    className="group px-8 py-4 bg-accent-600 text-white font-medium rounded-lg relative overflow-hidden shadow-lg shadow-accent-900/20">
                    <span className="relative z-10 flex items-center justify-center">
                        Download CV
                        <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </span>
                    <span className="absolute inset-0 bg-accent-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                    </a>
                    <button className="group px-8 py-4 border-2 border-accent-500 text-accent-400 font-medium rounded-lg relative overflow-hidden bg-transparent hover:text-white transition-colors duration-300 shadow-lg shadow-accent-900/10">
                        <span className="relative z-10 flex items-center justify-center">
                            Contact Me
                        </span>
                    </button>
                </div>
            </div>
            
        </>
    )
}
export default HomePage;