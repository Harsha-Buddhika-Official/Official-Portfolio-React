import '../styling.css'

function NavigationBar(){
    return(
        <div className="flex justify-between items-center bg-gray-800 text-white p-4">
            <h1>Harsha Buddhika</h1>
            <nav className="flex gap-4 ">
                <button className="navi">Home</button>
                <button className="navi">about</button>
                <button className="navi">Project</button>
                <button className="navi">Skills</button>
                <button className="navi">Education</button>
                <button className="navi">Contacts</button>
            </nav>
        </div>
    );
}
export default NavigationBar;