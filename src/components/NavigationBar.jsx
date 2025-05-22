import React, {useState} from 'react';
import '../styling.css';

function NavigationBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="flex justify-between items-center bg-[#1a1a1a88] text-white p-4 my-1 w-full text-center">
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
            
            <nav className={`flex-col md:flex-row md:flex gap-8 absolute md:static top-16 left-0 w-full md:w-auto bg-[#1a1a1a] md:bg-transparent z-10 transition-all duration-300 ${menuOpen ? 'flex' : 'hidden'} md:gap-8 py-4`}>
                <button className="navi"><span className="navi-text">Home</span></button>
                <button className="navi"><span className="navi-text">About</span></button>
                <button className="navi"><span className="navi-text">Project</span></button>
                <button className="navi"><span className="navi-text">Skills</span></button>
                <button className="navi"><span className="navi-text">Education</span></button>
                <button className="navi"><span className="navi-text">Contacts</span></button>
            </nav>
        </div>
    );
}
export default NavigationBar;