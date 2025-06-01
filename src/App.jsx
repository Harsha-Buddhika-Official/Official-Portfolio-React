import './App.css'
import NavigationBar from './components/NavigationBar.jsx'
import About from './pages/About.jsx'
import Education from './pages/Education.jsx'
import HomePage from './pages/HomePage.jsx'

function App() {

  return (
    <div className=''>
      <div className="fixed top-0 left-0 z-50 w-full">
        <NavigationBar/>
      </div>
      <HomePage/>
      <div className='md:m-[100px]'>
        <About/>
        <Education/>
      </div>
      
    </div>
  )
}

export default App
