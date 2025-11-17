import PixelCard from './PixelCard'

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-3xl px-6">
        <PixelCard title="Send a Raven" subtitle="Reach out for co-op quests">
          <form className="grid gap-3">
            <input className="pixel-input" placeholder="Your name" />
            <input className="pixel-input" placeholder="Email or sending stone" />
            <textarea rows={4} className="pixel-input" placeholder="Your message" />
            <button type="button" className="pixel-button px-4 py-2 w-fit">Cast Message</button>
          </form>
        </PixelCard>
      </div>
    </section>
  )
}
