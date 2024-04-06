import React, { useCallback, useState } from 'react';
import ReactFlow, { Controls, Background, useNodesState, useEdgesState, addEdge, Position } from 'reactflow';
import 'reactflow/dist/style.css';

import MenuBar from './MenuBar';
import SideMenuButton from './SideMenuButton';
import SidePane from './SidePane';
import NodesEdgesTable from './NodesEdgesTable';

const DEFAULT_NODE_DIAMETER = 75;

const nodeDefaults = {
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    style: {
      borderRadius: '100%',
      backgroundColor: '#fff',
      width: DEFAULT_NODE_DIAMETER,
      height: DEFAULT_NODE_DIAMETER,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
};


const initialNodes = [
    { id: '1', type: 'input', position: { x: -100, y: 0 }, data: { label: 'Node 1' }, ...nodeDefaults },
    { id: '2', position: { x: 100, y: 0 }, data: { label: 'Node 2' }, ...nodeDefaults },
];

const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

export default function Editor() {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const [reactFlowInstance, setReactFlowInstance] = useState(null);

    // update edge array when connections happen
    const [isPaneOpen, setIsPaneOpen] = useState(false);

    const onConnect = useCallback(
        (params) => setEdges((eds) => addEdge(params, eds)),
        [setEdges],
    );

    // allow the 'move' drag effect on the create new node icon
    const onDragStart = (e) => {
        e.dataTransfer.effectAllowed = 'move';
    };

    // use drag API to allow flowgraph to be droppable
    const onDragOver = useCallback((e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
      }, []);

    // when dropped, create a new code at the mouse location
    const onDrop = useCallback(e => {
        e.preventDefault();
        const mousePosition = reactFlowInstance.screenToFlowPosition({ x: e.clientX, y: e.clientY });
        const position =  {x: mousePosition.x-DEFAULT_NODE_DIAMETER/2, y: mousePosition.y-DEFAULT_NODE_DIAMETER/2 }
        const newNode = {
            id: `node-${nodes.length + 1}`,
            type: 'default',
            position,
            data: { label: `Node ${nodes.length + 1}` }, 
            ...nodeDefaults
          };
          setNodes((nds) => nds.concat(newNode));
    }, [nodes, setNodes, reactFlowInstance])

    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <MenuBar />
            <SideMenuButton onClick={() => setIsPaneOpen(true)} />
            
            <div
                style={{
                    position: 'absolute',
                    top: '10px',
                    left: '10px',
                    cursor: 'grab',
                }}
                onDragStart={onDragStart}
                draggable
            >
                {/* Node creation icon */}
                <div style={{ width: '20px', height: '20px', backgroundColor: 'skyblue' }}></div>
            </div>

            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                onInit={setReactFlowInstance}
                onDrop={onDrop}
                onDragOver={onDragOver}
                fitView
            >
            <Controls />
            <Background variant="dots" gap={12} size={1} />
        </ReactFlow>
        <SidePane isOpen={isPaneOpen} onClose={() => setIsPaneOpen(false)} nodes={nodes} edges={edges} />
        <NodesEdgesTable nodes={nodes} edges={edges} />

        </div>
    );
}
