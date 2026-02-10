import About from './components/year2025/about'
import Project from './components/year2025/projects'
import Skills from './components/year2025/skills'
import Contact from './components/year2025/contact'
import Experience from './components/year2025/experience'
import Footer from './components/year2025/footer'
import Hero from './components/year2025/hero'
import Navigation from './components/year2025/navigation'


function App() {



  return (
    <div className="bg-black/97 text-white min-h-screen flex flex-col selection:bg-yellow-400 selection:text-black">
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
