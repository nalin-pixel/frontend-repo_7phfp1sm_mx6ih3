import PixelCard from './PixelCard'

const PROJECTS = [
  {
    title: 'Arcane Character Builder',
    tags: ['React', 'Tailwind', 'Framer Motion'],
    desc: 'An interactive sheet to min-max stats and export builds as shareable links.',
    link: '#'
  },
  {
    title: 'Dungeon Mapper',
    tags: ['FastAPI', 'MongoDB', 'REST'],
    desc: 'Procedurally generate tile-based maps and save your layouts to the cloud.',
    link: '#'
  },
  {
    title: 'Loot Tracker',
    tags: ['Vite', 'PWA'],
    desc: 'Track party inventory with offline sync and pixel art item icons.',
    link: '#'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-20">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="text-3xl md:text-4xl font-black text-white tracking-wider text-shadow mb-8">Quests</h2>
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {PROJECTS.map((p, i) => (
            <PixelCard key={i} title={p.title} subtitle={p.tags.join(' • ')}>
              <p>{p.desc}</p>
              <a href={p.link} className="mt-3 inline-block pixel-button px-4 py-2">Open</a>
            </PixelCard>
          ))}
        </div>
      </div>
    </section>
  )
}
