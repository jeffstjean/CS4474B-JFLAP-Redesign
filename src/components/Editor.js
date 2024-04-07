import React, { useCallback, useState, useMemo } from 'react';
import ReactFlow, { Controls, Background, useNodesState, useEdgesState, updateEdge, addEdge, MarkerType } from 'reactflow';
import 'reactflow/dist/style.css';

import MenuBar from './MenuBar';
import TopTitlebar from './TopTitleBar';
import SideMenuButton from './SideMenuButton';
import SideToolbar from './SideToolBar';
import SidePane from './SidePane';
import TextEditor from './TextEditor'
import Node from './Node'
import Edge from './Edge';
import { Constants } from '../Constants'

import 'reactflow/dist/style.css';

const NODE_DEFAULTS = {
    type: 'custom',
};

const EDGE_DEFAULTS = {
    type: 'custom',
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
    { id: getNodeId(), position: { x: -200, y: 30 }, ...NODE_DEFAULTS },
    { id: getNodeId(), position: { x: 200, y: 30}, ...NODE_DEFAULTS },
    { id: getNodeId(), position: { x: -225, y: 400}, ...NODE_DEFAULTS },
    { id: getNodeId(), position: { x: 150, y: 300}, ...NODE_DEFAULTS },
];

initialNodes = initialNodes.map(n => ({ ...n, data: { ...n.data, label: n.id }}))

let edgeId = 0;
const getEdgeId = () => `e${edgeId++}`;

const initialEdges = [
    { id: getEdgeId(), source: 'q0', target: 'q1', label: 'a', ...EDGE_DEFAULTS },
    { id: getEdgeId(), source: 'q2', target: 'q0', label: 'b', ...EDGE_DEFAULTS },
    { id: getEdgeId(), source: 'q0', target: 'q2', label: 'c', ...EDGE_DEFAULTS },
    { id: getEdgeId(), source: 'q2', target: 'q3', label: 'd', ...EDGE_DEFAULTS },
    { id: getEdgeId(), source: 'q0', target: 'q3', label: 'e', ...EDGE_DEFAULTS },
    { id: getEdgeId(), source: 'q3', target: 'q1', label: 'f', ...EDGE_DEFAULTS },
];

export default function Editor() {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const [reactFlowInstance, setReactFlowInstance] = useState(null);

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

    const [editingEdgeId, setEditingEdgeId] = useState(null);

    const onLabelChange = useCallback((edgeId, newLabel) => {
        setEdges((els) => els.map((edge) => edge.id === edgeId ? { ...edge, label: newLabel } : edge));
    }, [setEdges]);

    const finishLabelEditing = useCallback((edgeId) => {
        setEditingEdgeId(null);
        // Optionally update the backend here if needed
    }, [setEditingEdgeId]);

    // update edge array when connections happen
    const [isPaneOpen, setIsPaneOpen] = useState(false);

    // on update of edges, modify the edge
    const onEdgeUpdate = useCallback((oldEdge, newConnection) => {
        setEdges((els) => updateEdge(oldEdge, newConnection, els))
    }, [setEdges]);

    // on new edges, add to edge array
    const onConnect = useCallback((params) => {
        setEdges((eds) => addEdge({ id: getEdgeId(), ...params, label: '---', ...EDGE_DEFAULTS }, eds))
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

    const nodeTypes = useMemo(() => ({ custom: Node }), []);
    const edgeTypes = useMemo(() => ({ custom: Edge }), []);

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
                        data: {
                            ...node.data,
                            label: node.id === editingNodeId ? (
                                <TextEditor text={editingNodeText || ''} onChange={(e) => setEditingNodeText(e.target.value)} onComplete={finishNodeEditing} />
                            ) : node.data.label
                        }
                    }))}
                    edges={edges.map(edge => ({
                        ...edge,
                        data: {
                            ...edge.data,
                            label: edge.label,
                            onLabelDoubleClick: () => setEditingEdgeId(edge.id),
                            onLabelChange: onLabelChange,
                            finishLabelEditing: finishLabelEditing,
                            isEditing: editingEdgeId === edge.id,
                        }
                    }))}
                    onNodeDoubleClick={onNodeDoubleClick}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onEdgeUpdate={onEdgeUpdate}
                    onConnect={onConnect}
                    onInit={setReactFlowInstance}
                    onDrop={onDrop}
                    onDragOver={onDragOver}
                    fitView
                    nodeTypes={nodeTypes}
                    edgeTypes={edgeTypes}
                    connectionMode="loose"
                >
                    <Controls />
                    <Background variant={Constants.editor.DEFAULT_BACKGROUND_TYPE} gap={12} size={1} />
                </ReactFlow>
                <SidePane isOpen={isPaneOpen} onClose={() => setIsPaneOpen(false)} nodes={nodes} edges={edges} />
            </div>
        </div>
    );
}
