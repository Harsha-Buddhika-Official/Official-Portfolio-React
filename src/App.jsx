import './App.css'
import NavigationBar from './components/NavigationBar.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Education from './pages/Education.jsx'
import Footer from './pages/Footer.jsx'
import HomePage from './pages/HomePage.jsx'
import Project from './pages/Project.jsx'
import Skills from './pages/Skills.jsx'

function App() {
  return (
    <div className=''>
      <div className="fixed top-0 left-0 z-50 w-full">
        <NavigationBar />
      </div>
      <div id="Home">
        <HomePage />
      </div>
      <div className='md:m-[100px]'>
        <div id="About">
          <About />
        </div>
        <div id="Project">
          <Project />
        </div>
        <div id="Skills">
          <Skills />
        </div>
        <div id="Education">
          <Education />
        </div>
        <div id="Contacts">
          <Contact />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
