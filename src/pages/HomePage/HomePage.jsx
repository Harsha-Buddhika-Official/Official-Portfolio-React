import Typing from '../../components/TypingAni.jsx'
import Ani from '../../components/AniType.jsx'

function HomePage(){
    return(
        <>
            <div className="flex flex-col items-center justify-center h-screen" style={{fontFamily: "'Fira Code', monospace"}}>
                <div>
                    <h1 className="text-6xl font-bold " >Hi there...!</h1>
                    <p className="text-3xl text-center">I'm Harsha Buddhika</p>
                </div>
                <div>
                    {/* <Typing/> */}
                    <Ani/>
                </div>
            </div>
        </>
    )
}
export default HomePage;