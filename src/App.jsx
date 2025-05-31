import './App.css'
import NavigationBar from './components/NavigationBar.jsx'
import About from './pages/HomePage/About.jsx'
import HomePage from './pages/HomePage/HomePage.jsx'

function App() {

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50">
        <NavigationBar/>
      </div>
      <HomePage/>
      <About/>
    </>
  )
}

export default App
