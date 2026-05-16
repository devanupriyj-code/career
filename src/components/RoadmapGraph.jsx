import React, { useMemo, useEffect } from "react"
import ReactFlow, {
  Background,
  Controls,
  Handle,
  Position,
  ReactFlowProvider,
  useReactFlow,
  useNodesState,
  useEdgesState
} from "reactflow"
import { motion } from "framer-motion"
import "reactflow/dist/style.css"
import { levelStyles } from "../data/careers"
import DifficultyBadge from "./ui/DifficultyBadge"
import { TopicIcon } from "./ui/icons"
import { layoutGraph } from "../utils/layoutGraph"
import { Layers, Clock, Signal } from "lucide-react"

// 1. MAIN SECTION NODE (Root)
function MainSectionNode({ data }) {
  return (
    <div className="relative min-w-[340px] rounded-3xl border border-cyan-400/50 bg-gradient-to-br from-zinc-950 via-zinc-900 to-black p-8 text-center shadow-[0_0_40px_rgba(34,211,238,0.25)] backdrop-blur-xl">
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-cyan-400/20 px-6 py-1.5 text-sm font-black uppercase tracking-[0.2em] text-cyan-300 ring-1 ring-cyan-400/50">
        Roadmap Start
      </div>
      <h2 className="mt-2 text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-zinc-400">{data.label}</h2>
      <p className="mt-3 text-sm font-medium leading-relaxed text-zinc-400">{data.description}</p>
      <Handle type="source" position={Position.Bottom} className="!h-4 !w-4 !border-cyan-200 !bg-cyan-400 !shadow-[0_0_15px_rgba(34,211,238,0.8)]" />
    </div>
  )
}

// 2. SECTION HEADER NODE (Beginner, Intermediate, etc)
function SectionHeaderNode({ data }) {
  const getColors = () => {
    switch (data.level) {
      case 'Beginner': return 'from-emerald-500/20 to-emerald-900/40 border-emerald-500/40 text-emerald-300 shadow-emerald-500/20'
      case 'Intermediate': return 'from-amber-500/20 to-amber-900/40 border-amber-500/40 text-amber-300 shadow-amber-500/20'
      case 'Advanced': return 'from-rose-500/20 to-rose-900/40 border-rose-500/40 text-rose-300 shadow-rose-500/20'
      default: return 'from-cyan-500/20 to-cyan-900/40 border-cyan-500/40 text-cyan-300 shadow-cyan-500/20'
    }
  }

  return (
    <div className={`relative min-w-[260px] rounded-2xl border bg-gradient-to-b ${getColors()} p-4 text-center shadow-[0_0_20px_var(--tw-shadow-color)] backdrop-blur-md`}>
      <Handle type="target" position={Position.Top} className="!h-3 !w-3 !border-zinc-300 !bg-zinc-800" />
      <div className="flex items-center justify-center gap-2">
        <Layers className="h-5 w-5" />
        <h2 className="text-xl font-black uppercase tracking-widest">{data.label}</h2>
      </div>
      <Handle type="source" position={Position.Bottom} className="!h-3 !w-3 !border-zinc-300 !bg-zinc-800" />
    </div>
  )
}

// 3. SUBSECTION NODE (Minimal Glassmorphism Topic)
function SubsectionNode({ data }) {
  const level = levelStyles[data.level] ?? levelStyles.Beginner
  const isSelected = Boolean(data.selected)

  const handleSelect = () => {
    data.onSelect?.(data.topic, data.id)
  }

  const getBorderColor = () => {
    switch (data.level) {
      case 'Beginner': return 'border-emerald-500/30'
      case 'Intermediate': return 'border-amber-500/30'
      case 'Advanced': return 'border-rose-500/30'
      default: return 'border-cyan-500/30'
    }
  }

  return (
    <motion.div
      role="button"
      tabIndex={0}
      onClick={handleSelect}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault()
          handleSelect()
        }
      }}
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.95 }}
      className={`nodrag nopan nowheel group relative z-10 flex min-w-[240px] max-w-[280px] cursor-pointer flex-col gap-3 rounded-2xl border bg-gradient-to-br ${level.node} p-4 text-left shadow-2xl shadow-black/50 backdrop-blur-xl transition-all duration-300 hover:border-white/40 hover:shadow-cyan-500/20 ${getBorderColor()} ${
        isSelected
          ? "ring-2 ring-cyan-400/80 shadow-[0_0_32px_rgba(34,211,238,0.35)] border-cyan-400/50"
          : ""
      }`}
    >
      <Handle type="target" position={Position.Top} className="!h-2.5 !w-2.5 !border-zinc-500 !bg-zinc-800" />
      
      <div className="flex items-center justify-between">
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-black/40 text-cyan-200 ring-1 ring-white/10 shadow-inner group-hover:text-white transition-colors">
          <TopicIcon name={data.icon} />
        </div>
        <DifficultyBadge level={data.level} />
      </div>

      <div>
        <h3 className="text-lg font-bold text-white leading-tight">{data.label}</h3>
        <div className="mt-2 flex items-center justify-between text-[11px] font-semibold text-zinc-400 uppercase tracking-wider">
          <span className="flex items-center gap-1"><Signal className="h-3.5 w-3.5" /> {data.level}</span>
          <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5 text-cyan-400" /> {data.time || "2 Weeks"}</span>
        </div>
      </div>

      {/* Floating Action Button inside Node */}
      <div className="absolute -right-3 -top-3 rounded-full bg-cyan-500 text-white opacity-0 shadow-lg shadow-cyan-500/50 transition-all duration-300 group-hover:opacity-100 p-1.5">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
      </div>

      <Handle type="source" position={Position.Bottom} className="!h-2.5 !w-2.5 !border-zinc-500 !bg-zinc-800" />
    </motion.div>
  )
}

const nodeTypes = {
  mainSection: MainSectionNode,
  sectionHeader: SectionHeaderNode,
  subsection: SubsectionNode
}

function RoadmapGraphInner({ roadmap, onSelectTopic, selectedNodeId }) {
  const { fitView } = useReactFlow()
  const [nodes, setNodes, onNodesChange] = useNodesState([])
  const [edges, setEdges, onEdgesChange] = useEdgesState([])

  // Calculate Layout (Branching Multi-Column Skill Tree)
  const { positionedNodes, positionedEdges } = useMemo(() => {
    if (!roadmap || !roadmap.sections || roadmap.sections.length === 0) {
      return { positionedNodes: [], positionedEdges: [] }
    }

    const initialNodes = []
    const initialEdges = []

    // 1. Root Node
    initialNodes.push({
      id: 'root',
      type: 'mainSection',
      data: { label: roadmap.title, description: roadmap.summary },
      width: 360,
      height: 160
    })

    let previousSectionId = 'root'
    
    // 2. Sections and Branching Topics
    roadmap.sections.forEach((section, sIndex) => {
      const sectionId = `sec-${sIndex}`
      
      // Section Header Node
      initialNodes.push({
        id: sectionId,
        type: 'sectionHeader',
        data: { label: section.title, level: section.level },
        width: 280,
        height: 80
      })

      // Spine edge (Connect previous section to this section)
      initialEdges.push({
        id: `e-spine-${previousSectionId}-${sectionId}`,
        source: previousSectionId,
        target: sectionId,
        type: 'smoothstep',
        animated: true,
        interactionWidth: 0,
        style: { stroke: "rgba(34, 211, 238, 0.6)", strokeWidth: 4, filter: 'drop-shadow(0 0 10px rgba(34,211,238,0.5))' },
      })

      // Topics branching out from Section Header
      section.topics?.forEach((topicRaw, tIndex) => {
        const step = roadmap?.steps?.find(s => s.title === topicRaw.title) || topicRaw
        const topicId = `topic-${sIndex}-${tIndex}`

        initialNodes.push({
          id: topicId,
          type: 'subsection',
          data: {
            id: topicId,
            label: step.title,
            level: step.level || section.level,
            icon: step.icon || roadmap.icon,
            time: step.weeks || step.estimatedTime,
            topic: step,
            onSelect: onSelectTopic,
            selected: false
          },
          width: 240,
          height: 130
        })

        // Branch edge (Section Header -> Topic)
        initialEdges.push({
          id: `e-branch-${sectionId}-${topicId}`,
          source: sectionId,
          target: topicId,
          type: 'smoothstep',
          animated: true,
          interactionWidth: 0,
          style: { stroke: "rgba(255, 255, 255, 0.2)", strokeWidth: 2 },
        })
      })

      previousSectionId = sectionId
    })

    // Apply dagre vertical layout
    const layoutNodes = layoutGraph(initialNodes, initialEdges, {
      direction: 'TB',
      rankSep: 100,
      nodeSep: 60,
      marginX: 80,
      marginY: 80
    })

    return {
      positionedNodes: layoutNodes,
      positionedEdges: initialEdges
    }
  }, [roadmap, onSelectTopic])

  // Update nodes and edges when layout changes
  useEffect(() => {
    setNodes(positionedNodes)
    setEdges(positionedEdges)
    
    const timer = setTimeout(() => {
      if (fitView) fitView({ padding: 0.15, duration: 1000 })
    }, 100)
    
    return () => clearTimeout(timer)
  }, [positionedNodes, positionedEdges, setNodes, setEdges, fitView])

  useEffect(() => {
    setNodes((current) =>
      current.map((node) =>
        node.type === "subsection"
          ? { ...node, data: { ...node.data, selected: node.id === selectedNodeId } }
          : node
      )
    )
  }, [selectedNodeId, setNodes])

  if (!roadmap || !roadmap.sections || roadmap.sections.length === 0) {
    return (
      <div className="relative flex h-[600px] w-full items-center justify-center overflow-hidden rounded-[2.5rem] border border-white/10 bg-black/40 shadow-2xl backdrop-blur-xl">
        <p className="text-zinc-400">No roadmap data available</p>
      </div>
    )
  }

  const handleNodeClick = (_, node) => {
    if (node.type !== "subsection" || !node.data?.topic) return
    onSelectTopic?.(node.data.topic, node.id)
  }

  return (
    <div className="roadmap-graph-host relative isolate z-0 h-[800px] w-full overflow-hidden rounded-[2.5rem] border border-white/10 bg-black/20 shadow-[0_0_50px_rgba(0,0,0,0.5)] backdrop-blur-xl lg:h-[900px]">
      
      {/* Legend Overlay */}
      <div className="absolute left-6 top-6 z-10 flex flex-col gap-3 rounded-2xl border border-white/10 bg-black/60 p-5 shadow-2xl backdrop-blur-xl pointer-events-none">
        <p className="mb-1 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">Legend</p>
        <div className="flex items-center gap-3">
          <div className="h-3 w-3 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.8)]" />
          <span className="text-xs font-bold text-zinc-300">Beginner</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="h-3 w-3 rounded-full bg-amber-500 shadow-[0_0_12px_rgba(245,158,11,0.8)]" />
          <span className="text-xs font-bold text-zinc-300">Intermediate</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="h-3 w-3 rounded-full bg-rose-500 shadow-[0_0_12px_rgba(244,63,94,0.8)]" />
          <span className="text-xs font-bold text-zinc-300">Advanced</span>
        </div>
      </div>

      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={handleNodeClick}
        fitView
        fitViewOptions={{ padding: 0.15, duration: 1000 }}
        minZoom={0.1}
        maxZoom={1.5}
        panOnScroll
        zoomOnPinch
        zoomOnScroll
        panOnDrag
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        proOptions={{ hideAttribution: true }}
      >
        <Background color="rgba(255,255,255,0.03)" gap={32} size={2} variant="dots" />
        
        <Controls 
          className="!overflow-hidden !rounded-2xl !border-white/10 !bg-zinc-900/90 !shadow-2xl !backdrop-blur-xl"
          showInteractive={false}
        />
      </ReactFlow>
    </div>
  )
}

function RoadmapGraph({ roadmap, onSelectTopic, selectedNodeId }) {
  return (
    <ReactFlowProvider>
      <RoadmapGraphInner
        roadmap={roadmap}
        onSelectTopic={onSelectTopic}
        selectedNodeId={selectedNodeId}
      />
    </ReactFlowProvider>
  )
}

export default RoadmapGraph
