import AdSense from "./AdSense"
import { AD_SLOTS } from "./constants"

/** Full-width footer banner. */
export default function FooterAd({ className = "" }) {
  return (
    <AdSense
      adSlot={AD_SLOTS.FOOTER}
      adFormat="horizontal"
      fullWidthResponsive
      className={`my-0 max-w-7xl ${className}`}
      style={{ minHeight: 90 }}
      lazy
    />
  )
}
