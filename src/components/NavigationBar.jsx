function NavigationBar(){
    return(
        <div className="flex justify-between items-center bg-gray-800 text-white p-4">
            <h1>Harsha Buddhika</h1>
            <nav className="flex gap-4 ">
                <button className="cursor-pointer hover:underline">Home</button>
                <button className="cursor-pointer hover:underline">about</button>
                <button className="cursor-pointer hover:underline">Project</button>
                <button className="cursor-pointer hover:underline">Skills</button>
                <button className="cursor-pointer hover:underline">Education</button>
                <button className="cursor-pointer hover:underline">Contacts</button>
            </nav>
        </div>
    );
}
export default NavigationBar;