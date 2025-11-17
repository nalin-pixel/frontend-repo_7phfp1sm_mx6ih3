import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div id="top" className="min-h-screen bg-[#0a0d14]">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

function Footer() {
  return (
    <footer className="py-10 text-center text-white/70">
      <p className="text-sm">Made with heart containers and lots of potions. © {new Date().getFullYear()}</p>
    </footer>
  )
}

export default App
