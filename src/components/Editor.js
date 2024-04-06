import React, { useState, useCallback } from 'react';
import SideMenuButton from './SideMenuButton';
import SidePane from './SidePane';
import SideToolbar from './SideToolBar';
import TopTitlebar from './TopTitleBar';
import NodesEdgesTable from './NodesEdgesTable';
import ReactFlow, {
    MiniMap,
    Controls,
    Background,
    useNodesState,
    useEdgesState,
    addEdge,
} from 'reactflow';
import MenuBar from './MenuBar'

import 'reactflow/dist/style.css';

const initialNodes = [
    { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
    { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
];

const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

export default function Editor() {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const [isPaneOpen, setIsPaneOpen] = useState(false);

    const onConnect = useCallback(
        (params) => setEdges((eds) => addEdge(params, eds)),
        [setEdges],
    );

    return (
        <div style={{ display: 'flex', width: '100vw', height: '100vh' }}>
            <div style={{ width: '80px', backgroundColor: '#333', color: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <SideToolbar />
            </div>
            <div style={{ flex: 1 }}>

                <TopTitlebar />
                <MenuBar />
                <SideMenuButton onClick={() => setIsPaneOpen(true)} />

                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onConnect={onConnect}
                >
                    <Controls />
                    <MiniMap />
                    <Background variant="dots" gap={12} size={1} />
                </ReactFlow>
                <SidePane isOpen={isPaneOpen} onClose={() => setIsPaneOpen(false)} nodes={nodes} edges={edges} />
                <NodesEdgesTable nodes={nodes} edges={edges} />
            </div>
        </div>
    );
}