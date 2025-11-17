import { useState } from 'react'
import { Menu, X, Home, User, Mail, Github, Linkedin } from 'lucide-react'

function NavLink({ href, children, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="px-4 py-2 rounded pixel-button text-sm md:text-base"
    >
      {children}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const toggle = () => setOpen((o) => !o)
  const close = () => setOpen(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-6xl px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <a href="#top" className="flex items-center gap-2 pixel-card px-3 py-2">
            <span className="inline-flex size-6 items-center justify-center bg-gradient-to-br from-emerald-400 to-lime-400 text-black font-black pixel-card">8</span>
            <span className="font-black tracking-wider text-white text-shadow">PIXEL D&D</span>
          </a>

          <nav className="hidden md:flex items-center gap-2">
            <NavLink href="#home"><Home className="size-4 mr-1" /> Home</NavLink>
            <NavLink href="#about"><User className="size-4 mr-1" /> About</NavLink>
            <NavLink href="#projects"><StarIcon /> Projects</NavLink>
            <NavLink href="#contact"><Mail className="size-4 mr-1" /> Contact</NavLink>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="px-3 py-2 pixel-card text-sm md:text-base flex items-center gap-2">
              <Github className="size-4" /> GitHub
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="px-3 py-2 pixel-card text-sm md:text-base flex items-center gap-2">
              <Linkedin className="size-4" /> LinkedIn
            </a>
          </nav>

          <button onClick={toggle} className="md:hidden pixel-button px-3 py-2" aria-label="Toggle menu">
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-3 grid gap-2">
            <NavLink href="#home" onClick={close}><Home className="size-4 mr-1" /> Home</NavLink>
            <NavLink href="#about" onClick={close}><User className="size-4 mr-1" /> About</NavLink>
            <NavLink href="#projects" onClick={close}><StarIcon /> Projects</NavLink>
            <NavLink href="#contact" onClick={close}><Mail className="size-4 mr-1" /> Contact</NavLink>
          </div>
        )}
      </div>
    </header>
  )
}

function StarIcon() {
  // Using a simple pixel star via CSS box rather than relying on a rare icon
  return (
    <span className="relative inline-block mr-1 align-middle">
      <span className="block size-3 bg-yellow-300 rotate-45"></span>
      <span className="absolute inset-0 block size-3 bg-yellow-400 -rotate-45"></span>
    </span>
  )
}
