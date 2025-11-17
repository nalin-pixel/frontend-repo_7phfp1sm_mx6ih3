export default function PixelCard({ title, subtitle, children }) {
  return (
    <div className="pixel-card p-4 md:p-6 bg-[#0b0f1a]/70">
      {title && (
        <h3 className="font-black text-white text-lg md:text-xl tracking-wider text-shadow">
          {title}
        </h3>
      )}
      {subtitle && (
        <p className="text-white/70 text-sm md:text-base mt-1">{subtitle}</p>
      )}
      <div className="mt-3 text-white/90">
        {children}
      </div>
    </div>
  )}
