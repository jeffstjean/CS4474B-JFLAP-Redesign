import React, { useState, useCallback } from 'react';
import ReactFlow, { addEdge, MiniMap, Controls, Background } from 'reactflow';

const initialNodes = [
  { id: 'node-1', type: 'input', position: { x: 250, y: 5 }, data: { label: 'Node 1' } },
  { id: 'node-2', position: { x: 100, y: 100 }, data: { label: 'Node 2' } },
  // Add more nodes here
];

const initialEdges = [
  // Connect nodes by adding edges here
  // Example: { id: 'edge-1', source: 'node-1', target: 'node-2' },
];

function DragNDrop() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

  return (
    <div style={{ height: 800 }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onConnect={onConnect}
        fitView
      >
        <MiniMap />
        <Controls />
        <Background color="#aaa" gap={16} />
      </ReactFlow>
    </div>
  );
}

export default DragNDrop;