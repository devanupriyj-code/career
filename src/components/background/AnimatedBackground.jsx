import React from "react"
import GridBackground from "./GridBackground"
import GlowOrb from "./GlowOrb"
import ParticleLayer from "./ParticleLayer"

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-black selection:bg-cyan-500/30">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-black to-black" />
      
      <GridBackground />
      <ParticleLayer count={40} />
      
      {/* Background glowing orbs for cinematic depth */}
      <GlowOrb color="bg-cyan-600" position="-top-20 -left-20" size="w-[30rem] h-[30rem]" delay={0} duration={12} blur="blur-[120px]" />
      <GlowOrb color="bg-fuchsia-600" position="top-40 -right-20" size="w-[25rem] h-[25rem]" delay={2} duration={15} blur="blur-[100px]" />
      <GlowOrb color="bg-blue-600" position="-bottom-40 left-1/3" size="w-[35rem] h-[35rem]" delay={4} duration={18} blur="blur-[140px]" />
      
      {/* Noise texture overlay to make gradients look premium and prevent banding */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
    </div>
  )
}
