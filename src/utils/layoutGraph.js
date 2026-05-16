import dagre from '@dagrejs/dagre'

/**
 * Automatically positions nodes vertically using dagre layout engine
 * @param {Array} nodes - React Flow nodes
 * @param {Array} edges - React Flow edges
 * @param {Object} options - Layout options
 * @returns {Array} - Positioned nodes
 */
export function layoutGraph(nodes, edges, options = {}) {
  const {
    direction = 'TB', // TB = Top to Bottom, LR = Left to Right
    nodeWidth = 280,
    nodeHeight = 140,
    rankSep = 120, // Vertical spacing between ranks
    nodeSep = 80, // Horizontal spacing between nodes
    marginX = 50,
    marginY = 50
  } = options

  const dagreGraph = new dagre.graphlib.Graph()
  dagreGraph.setDefaultEdgeLabel(() => ({}))
  dagreGraph.setGraph({
    rankdir: direction,
    nodesep: nodeSep,
    ranksep: rankSep,
    marginx: marginX,
    marginy: marginY
  })

  // Add nodes to dagre graph
  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, {
      width: node.width || nodeWidth,
      height: node.height || nodeHeight
    })
  })

  // Add edges to dagre graph
  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target)
  })

  // Calculate layout
  dagre.layout(dagreGraph)

  // Apply calculated positions to nodes
  const positionedNodes = nodes.map((node) => {
    const nodeWithPosition = dagreGraph.node(node.id)
    const nWidth = node.width || nodeWidth;
    const nHeight = node.height || nodeHeight;
    return {
      ...node,
      position: {
        x: nodeWithPosition ? nodeWithPosition.x - nWidth / 2 : 0,
        y: nodeWithPosition ? nodeWithPosition.y - nHeight / 2 : 0
      }
    }
  })

  return positionedNodes
}

/**
 * Group nodes by difficulty level for section organization
 * @param {Array} steps - Roadmap steps
 * @returns {Object} - Grouped sections
 */
export function groupByLevel(steps) {
  return steps.reduce((acc, step) => {
    const level = step.level || 'Beginner'
    if (!acc[level]) {
      acc[level] = []
    }
    acc[level].push(step)
    return acc
  }, {})
}

/**
 * Calculate section spacing for visual separation
 * @param {Array} sections - Array of section objects
 * @param {number} baseSpacing - Base vertical spacing
 * @returns {Array} - Sections with calculated spacing
 */
export function calculateSectionSpacing(sections, baseSpacing = 200) {
  let yOffset = 0
  return sections.map((section) => {
    const sectionWithSpacing = {
      ...section,
      yOffset,
      height: section.nodes.length * 140 + (section.nodes.length - 1) * 120
    }
    yOffset += sectionWithSpacing.height + baseSpacing
    return sectionWithSpacing
  })
}
