import PixelCard from './PixelCard'

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-6 items-start">
        <PixelCard title="Character Sheet" subtitle="Class: Frontend Sorcerer • Level: 20">
          <ul className="list-disc list-inside space-y-1">
            <li>Spells: React, Tailwind, Framer Motion, Radix</li>
            <li>Tools: Git, Vite, Design Systems</li>
            <li>Perks: Accessible UI, Responsive Layouts, Micro-interactions</li>
          </ul>
        </PixelCard>
        <PixelCard title="Backstory" subtitle="Origin: Dungeon of DOM">
          <p>
            Raised among sprites and nodes, I craft magical interfaces with a retro soul. My quest:
            forge delightful experiences that feel like booting a beloved 16-bit cartridge.
          </p>
        </PixelCard>
      </div>
    </section>
  )
}
