import About from './components/about'
import Hero from './components/hero'
import Experience from './components/experience'
import Navigation from './components/navigation'
import Skills from './components/skills'
import Project from './components/projects'
import Contact from './components/contact'
import Footer from './components/footer'


function App() {



  return (
    <div className="bg-black/97 text-white min-h-screen flex flex-col">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
