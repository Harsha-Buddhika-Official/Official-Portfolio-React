import React, {useState} from 'react';
import '../styling.css';

function NavigationBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className=" bg-[#1a1a1a88] text-white px-3 py-6 md:py-1 my-0 w-full">
            <div className='flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-2 lg:px-8'>
                <h1 className="text-[20px] font-bold" style={{ fontFamily: "'Fira Code', monospace" }}>Harsha Buddhika</h1>
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="cursor-pointer md:hidden flex flex-col gap-1 focus:outline-none"
                    aria-label="Toggle menu"
                >
                    {menuOpen ? (
                        <span className="text-2xl font-bold">&times;</span>
                    ):(
                        <>
                            <span className="block w-6 h-0.5 bg-white"></span>
                            <span className="block w-6 h-0.5 bg-white"></span>
                            <span className="block w-6 h-0.5 bg-white"></span>
                        </>
                    )}
                    
                </button>
                
                <nav className={`flex-col md:flex-row md:flex gap-3 absolute md:static top-16 left-0 w-full md:w-auto bg-[#1a1a1a] md:bg-transparent z-10 transition-all duration-300 ${menuOpen ? 'flex' : 'hidden'} py-4 md:gap-5`}>
                    <button ><span className="navi">Home</span></button>
                    <button ><span className="navi">About</span></button>
                    <button ><span className="navi">Project</span></button>
                    <button ><span className="navi">Skills</span></button>
                    <button ><span className="navi">Education</span></button>
                    <button ><span className="navi mb-1 md:mb-0">Contacts</span></button>
                </nav>
            </div>
        </div>
    );
}
export default NavigationBar;