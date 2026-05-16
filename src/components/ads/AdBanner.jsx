import AdSense from "./AdSense"
import { AD_SLOTS } from "./constants"

/** Horizontal responsive banner for in-content placements. */
export default function AdBanner({
  slot = AD_SLOTS.HOMEPAGE_BANNER,
  className = "",
  lazy = true
}) {
  return (
    <AdSense
      adSlot={slot}
      adFormat="auto"
      fullWidthResponsive
      className={className}
      style={{ minHeight: 100 }}
      lazy={lazy}
    />
  )
}
