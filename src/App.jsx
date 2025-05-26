import './App.css'
import NavigationBar from './components/NavigationBar.jsx'
import HomePage from './pages/HomePage/HomePage.jsx'

function App() {

  return (
    <>
      <NavigationBar className="sticky"/>
      <HomePage/>
    </>
  )
}

export default App
