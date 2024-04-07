import React, { useCallback, useState } from 'react';
import ReactFlow, { Controls, Background, useNodesState, useEdgesState, updateEdge, addEdge, Position, MarkerType } from 'reactflow';
import 'reactflow/dist/style.css';

import MenuBar from './MenuBar';
import TopTitlebar from './TopTitleBar';
import SideMenuButton from './SideMenuButton';
import SideToolbar from './SideToolBar';
import SidePane from './SidePane';
import TextEditor from './TextEditor'
import { Constants } from '../Constants'

import 'reactflow/dist/style.css';

const NODE_DEFAULTS = {
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    style: {
      borderRadius: '100%',
      color: Constants.node.TEXT_COLOR,
      backgroundColor: Constants.node.BACKGROUND_COLOR,
      borderColor: Constants.node.STROKE_COLOR,
      borderWidth: Constants.node.STROKE_WIDTH,
      width: Constants.node.DEFAULT_DIAMETER,
      height: Constants.node.DEFAULT_DIAMETER,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
};

const EDGE_DEFAULTS = {
    type: Constants.EDGE_TYPE,
    updatable: true,
    markerEnd: {
        type: MarkerType.ArrowClosed,
        color: Constants.edge.STROKE_COLOR,
        height: Constants.edge.ARROW_SIZE,
        width: Constants.edge.ARROW_SIZE,
    },
    style: {
        stroke: Constants.edge.STROKE_COLOR,
        strokeWidth: Constants.edge.STROKE_WIDTH,
    },
}

let nodeId = 0;
const getNodeId = () => `q${nodeId++}`;



let initialNodes = [
    { id: getNodeId(), position: { x: -100, y: -30 }, ...NODE_DEFAULTS },
    { id: getNodeId(), position: { x: 100, y: 30}, ...NODE_DEFAULTS },
];

// initialNodes = initialNodes.map(n => n.data.label = n.id)
initialNodes = initialNodes.map(n => ({ ...n, data: { label: n.id }}))

let edgeId = 0;
const getEdgeId = () => `e${edgeId++}`;

const initialEdges = [{ id: getEdgeId(), source: initialNodes[0].id, target: initialNodes[1].id, ...EDGE_DEFAULTS }];

export default function Editor() {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const [reactFlowInstance, setReactFlowInstance] = useState(null);
    const [hoveredNodeId, setHoveredNodeId] = useState(null);

    // track state of editing ID and text
    const [editingNodeId, setEditingNodeId] = useState(null);
    const [editingNodeText, setEditingNodeText] = useState('');

    const onNodeDoubleClick = useCallback((event, node) => {
        setEditingNodeId(node.id);
        setEditingNodeText(node.data.label);
    }, []);

    const finishNodeEditing = useCallback(() => {
        if (editingNodeId) {
            const updatedNodes = nodes.map((node) => {
                if (node.id === editingNodeId) {
                    return { ...node, data: { ...node.data, label: editingNodeText } };
                }
                return node;
            });
            setNodes(updatedNodes);
            setEditingNodeId(null);
        }
        setEditingNodeText('');
    }, [editingNodeId, editingNodeText, nodes, setNodes]);

    // update edge array when connections happen
    const [isPaneOpen, setIsPaneOpen] = useState(false);

    // on update of edges, modify the edge
    const onEdgeUpdate = useCallback((oldEdge, newConnection) => {
        setEdges((els) => updateEdge(oldEdge, newConnection, els))
    }, [setEdges]);

    // on new edges, add to edge array
    const onConnect = useCallback((params) => {
        setEdges((eds) => addEdge({ id: getEdgeId(), ...params, ...EDGE_DEFAULTS }, eds))
    }, [setEdges]);

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
        const position =  {x: mousePosition.x-Constants.node.DEFAULT_DIAMETER/2, y: mousePosition.y-Constants.node.DEFAULT_DIAMETER/2 }
        const id = getNodeId();
        const newNode = {
            id: id,
            type: 'default',
            position,
            data: { label: id }, 
            ...NODE_DEFAULTS
          };
          setNodes((nds) => nds.concat(newNode));
    }, [setNodes, reactFlowInstance])

    return (
        <div style={{ display: 'flex', width: '100vw', height: '100vh' }}>
            <div style={{ width: '80px', backgroundColor: '#333', color: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <SideToolbar onDragStart={onDragStart} />
            </div>
            <div style={{ flex: 1 }}>

                <TopTitlebar />
                <MenuBar />
                <SideMenuButton onClick={() => setIsPaneOpen(true)} />

                <ReactFlow
                    nodes={nodes.map(node => ({
                        ...node,
                        style: {
                            ...node.style,
                            borderColor: node.id === hoveredNodeId ? 'red' : node.style.borderColor, // Highlight border color change as an example
                            borderWidth: node.id === hoveredNodeId ? 2 : NODE_DEFAULTS.style.borderWidth,
                        },
                        data: {
                            ...node.data,
                            label: node.id === editingNodeId ? (
                                <TextEditor text={editingNodeText} onChange={(e) => setEditingNodeText(e.target.value)} onComplete={finishNodeEditing} />
                            ) : node.data.label
                        }
                    }))}
                    
                    edges={edges}
                    onNodeDoubleClick={onNodeDoubleClick}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onEdgeUpdate={onEdgeUpdate}
                    onConnect={onConnect}
                    onInit={setReactFlowInstance}
                    onDrop={onDrop}
                    onDragOver={onDragOver}
                    onNodeMouseEnter={(_, node) => setHoveredNodeId(node.id)}
                    onNodeMouseLeave={() => setHoveredNodeId(null)}
                    fitView
                >
                    <Controls />
                    <Background variant="dots" gap={12} size={1} />
                </ReactFlow>
                <SidePane isOpen={isPaneOpen} onClose={() => setIsPaneOpen(false)} nodes={nodes} edges={edges} setHoveredNodeId={setHoveredNodeId} hoveredNodeId={hoveredNodeId} />
            </div>
        </div>
    );
}
