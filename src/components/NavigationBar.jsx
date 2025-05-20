import '../styling.css'

function NavigationBar() {
    return (
        <div className="flex justify-between items-center bg-[#1a1a1a88] text-white p-4 my-1 w-full text-center">
            <h1 className="text-[20px] font-bold" style={{ fontFamily: "'Fira Code', monospace" }}>Harsha Buddhika</h1>
            <nav className="flex gap-8">
                <button className="navi">Home</button>
                <button className="navi">About</button>
                <button className="navi">Project</button>
                <button className="navi">Skills</button>
                <button className="navi">Education</button>
                <button className="navi">Contacts</button>
            </nav>
        </div>
    );
}
export default NavigationBar;