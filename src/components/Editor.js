import React, { useCallback, useState } from 'react';
import ReactFlow, { Controls, Background, useNodesState, useEdgesState, addEdge, Position } from 'reactflow';
import 'reactflow/dist/style.css';

import MenuBar from './MenuBar';
import SideMenuButton from './SideMenuButton';
import SidePane from './SidePane';
import TempDragIcon from './TempDragIcon';

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

let id = 0;
const getId = () => `q${id++}`;

const node1 = getId()
const node2 = getId()

const initialNodes = [
    { id: node1, type: 'input', position: { x: -100, y: 0 }, data: { label: node1 }, ...nodeDefaults },
    { id: node2, position: { x: 100, y: 0 }, data: { label: node2 }, ...nodeDefaults },
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
        const id = getId();
        const newNode = {
            id: id,
            type: 'default',
            position,
            data: { label: id }, 
            ...nodeDefaults
          };
          setNodes((nds) => nds.concat(newNode));
    }, [nodes, setNodes, reactFlowInstance])

    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <MenuBar />

            <SideMenuButton onClick={() => setIsPaneOpen(true)} />
            
            <TempDragIcon onDragStart={onDragStart} />

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

        </div>
    );
}
