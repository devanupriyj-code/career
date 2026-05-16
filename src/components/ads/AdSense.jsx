import { useEffect, useId, useRef } from "react"
import { ADSENSE_CLIENT, isAdSenseDevMode } from "./constants"

const pushedKeys = new Set()

function AdWrapper({ children, className = "", minHeight = 90, label = "Advertisement" }) {
  return (
    <aside
      className={`ad-wrapper my-6 overflow-hidden rounded-2xl border border-white/[0.06] bg-black/20 ${className}`}
      style={{ minHeight }}
      aria-label={label}
    >
      <p className="px-3 pt-2 text-center text-[10px] font-medium uppercase tracking-widest text-zinc-600">
        {label}
      </p>
      <div className="flex min-h-[inherit] items-center justify-center px-3 pb-3">{children}</div>
    </aside>
  )
}

function AdPlaceholder({ adSlot, adFormat, minHeight, className }) {
  return (
    <AdWrapper className={className} minHeight={minHeight}>
      <div className="flex w-full flex-col items-center justify-center gap-1 rounded-xl border border-dashed border-white/10 bg-white/[0.03] px-6 py-8 text-center">
        <p className="text-sm font-semibold text-zinc-400">Google Ad Placeholder</p>
        <p className="text-xs text-zinc-600">Ads appear on your published domain</p>
        {adSlot && <p className="mt-1 font-mono text-[10px] text-zinc-700">slot {adSlot}</p>}
        {adFormat && <p className="font-mono text-[10px] text-zinc-700">{adFormat}</p>}
      </div>
    </AdWrapper>
  )
}

/**
 * Reusable Google AdSense unit. Script is loaded once in index.html.
 */
export default function AdSense({
  adSlot,
  adFormat = "auto",
  fullWidthResponsive = true,
  className = "",
  style,
  label = "Advertisement",
  lazy = true
}) {
  const insRef = useRef(null)
  const pushedRef = useRef(false)
  const instanceId = useId()
  const devMode = isAdSenseDevMode()
  const minHeight = style?.minHeight ?? (adFormat === "vertical" ? 250 : 90)

  useEffect(() => {
    if (devMode || !adSlot || pushedRef.current) return

    let cancelled = false
    let observer

    const pushAd = () => {
      if (cancelled || pushedRef.current) return

      const ins = insRef.current
      if (!ins) return

      if (ins.getAttribute("data-adsbygoogle-status")) {
        pushedRef.current = true
        return
      }

      const key = `${adSlot}-${instanceId}`
      if (pushedKeys.has(key)) {
        pushedRef.current = true
        return
      }

      try {
        if (typeof window === "undefined" || !window.adsbygoogle) {
          window.adsbygoogle = window.adsbygoogle || []
        }
        window.adsbygoogle.push({})
        pushedKeys.add(key)
        pushedRef.current = true
      } catch (error) {
        console.warn("[AdSense] Failed to initialize ad:", error)
      }
    }

    if (lazy && typeof IntersectionObserver !== "undefined") {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((entry) => entry.isIntersecting)) {
            pushAd()
            observer?.disconnect()
          }
        },
        { rootMargin: "120px" }
      )
      if (insRef.current) observer.observe(insRef.current)
    } else {
      pushAd()
    }

    return () => {
      cancelled = true
      observer?.disconnect()
    }
  }, [adSlot, adFormat, devMode, lazy, instanceId])

  if (!adSlot) return null

  if (devMode) {
    return (
      <AdPlaceholder
        adSlot={adSlot}
        adFormat={adFormat}
        minHeight={minHeight}
        className={className}
      />
    )
  }

  return (
    <AdWrapper className={className} minHeight={minHeight} label={label}>
      <ins
        ref={insRef}
        className="adsbygoogle block w-full"
        style={{ display: "block", minHeight, ...style }}
        data-ad-client={ADSENSE_CLIENT}
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidthResponsive ? "true" : "false"}
      />
    </AdWrapper>
  )
}
