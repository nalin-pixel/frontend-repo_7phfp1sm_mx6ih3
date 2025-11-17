import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Jd4wcqFfe70N-TXP/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Retro gradient overlay to enhance pixel vibe */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,0,128,0.15),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(0,255,200,0.15),transparent_45%),radial-gradient(circle_at_50%_80%,rgba(255,255,0,0.12),transparent_40%)]"></div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-24 text-center">
        <h1 className="text-5xl md:text-7xl font-black tracking-wider text-white drop-shadow-[0_2px_0_#000]">
          Pixel D&D Portfolio
        </h1>
        <p className="mt-4 text-lg md:text-xl text-white/90 font-semibold drop-shadow-[0_2px_0_#000]">
          A retro-fantasy showcase of quests, skills, and magical builds.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#projects" className="pixel-button px-5 py-3">Enter the Dungeon</a>
          <a href="#about" className="pixel-button px-5 py-3">View Character Sheet</a>
        </div>
      </div>

      {/* Scanline + vignette */}
      <div className="pointer-events-none absolute inset-0 mix-blend-multiply opacity-30" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.15)_1px,transparent_1px)', backgroundSize: '100% 3px' }} />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_60%,rgba(0,0,0,0.6))]"></div>
    </section>
  )
}
