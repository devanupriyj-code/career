import AdSense from "./AdSense"
import { AD_SLOTS } from "./constants"

/** Compact vertical unit for the sidebar. */
export default function SidebarAd({ collapsed = false, className = "" }) {
  if (collapsed) return null

  return (
    <AdSense
      adSlot={AD_SLOTS.SIDEBAR}
      adFormat="auto"
      fullWidthResponsive
      className={`my-0 ${className}`}
      style={{ minHeight: 200 }}
      label="Sponsored"
      lazy
    />
  )
}
