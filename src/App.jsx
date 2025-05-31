import './App.css'
import NavigationBar from './components/NavigationBar.jsx'
import About from './pages/About.jsx'
import Education from './pages/Education.jsx'
import HomePage from './pages/HomePage.jsx'

function App() {

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50">
        <NavigationBar/>
      </div>
      <HomePage/>
      <About/>
      <Education/>
    </>
  )
}

export default App
