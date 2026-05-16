import { Play } from "lucide-react"

function VideoPreviewCard({ video }) {
  const fallbackThumbnail = "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg"

  return (
    <a
      href={video.url}
      target="_blank"
      rel="noreferrer"
      className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.07]"
    >
      <div className="relative aspect-video overflow-hidden">
        <img src={video.thumbnail ?? fallbackThumbnail} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-3 left-3 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-black">
          <Play className="h-4 w-4 fill-current" />
        </div>
        <span className="absolute bottom-3 right-3 rounded-md bg-black/70 px-2 py-1 text-xs text-white">{video.duration ?? "Free"}</span>
      </div>
      <div className="p-4">
        <h4 className="line-clamp-2 font-semibold text-white">{video.title}</h4>
        <p className="mt-2 text-sm text-zinc-500">{video.channel ?? "YouTube"}</p>
      </div>
    </a>
  )
}

export default VideoPreviewCard
